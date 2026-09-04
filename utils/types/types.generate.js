/**
 * TypeScript declarations from a JSON Schema.
 *
 * `json-schema-to-typescript` does the work; this decides what to hand it.
 * Meta-schemas defeat it in three different ways, so three strategies are
 * tried in order of how much of the schema's shape they keep. See types.md.
 */

import $RefParser from '@apidevtools/json-schema-ref-parser'
import { compile } from 'json-schema-to-typescript'

import { cutSelfReferences } from '#types/types.cycles'
import { prepare, restore } from '#types/types.prepare'

/**
 * `unreachableDefinitions` is the option that matters.
 *
 * Without it only what the root reaches gets a type, and MCP's root reaches
 * nothing at all — the document is a bag of `$defs` a consumer points into, so
 * every named object would be dropped.
 */
const OPTIONS = {
  bannerComment: '',
  unreachableDefinitions: true,
  unknownAny: true,
  additionalProperties: false,
  $refOptions: { resolve: { external: false } },
}

const RESOLVE = { resolve: { external: false } }

/**
 * How to hand the schema over, best first.
 *
 * Leaving the references in place keeps each definition a named type, so it is
 * always tried first. Some documents defeat the generator's own resolver and
 * need one run beforehand — which costs names, since a resolved reference is
 * no longer a name. And a document that recurses into itself has no finite
 * resolved form, so those edges are cut, which costs the shape of whatever
 * recursed and nothing else.
 */
const STRATEGIES = [
  { name: 'references kept', build: schema => schema },
  { name: 'references resolved', build: schema => $RefParser.dereference(schema, RESOLVE) },
  {
    name: 'self-references cut',
    build: schema => $RefParser.dereference(cutSelfReferences(schema).schema, RESOLVE),
  },
]

/** A comment saying where the file came from and that editing it is pointless. */
function banner(name, id, strategy) {
  return [
    '/**',
    ` * ${name} — generated from the vendored JSON Schema.`,
    ' *',
    ` * ${id}`,
    ` * Strategy: ${strategy}.`,
    ' *',
    ' * Do not edit by hand.',
    ' */',
    '',
  ].join('\n')
}

/**
 * @param   {object} schema  the vendored document
 * @param   {object} options
 * @param   {string} options.name  the root type's name
 * @param   {string} options.id    what to cite in the banner
 * @returns {Promise<{typescript: string, types: string[], strategy: string}>}
 */
export async function generate(schema, { name, id }) {
  // the generator names the root type after `$id` when there is one, which
  // turns a URL into an identifier; `title` is what it prefers, and the
  // specification's own name reads better than its release URL
  const prepared = { ...prepare(schema), title: name }
  const failures = []

  for (const strategy of STRATEGIES) {
    try {
      const compiled = await compile(await strategy.build(structuredClone(prepared)), name, OPTIONS)
      const typescript = `${banner(name, id, strategy.name)}${restore(compiled)}`
      const types = [ ...typescript.matchAll(/^export (?:interface|type) (\w+)/gm) ].map(match => match[ 1 ])

      return { typescript, types, strategy: strategy.name }
    } catch (error) {
      failures.push(`${strategy.name}: ${error.message || '(no message)'}`)
    }
  }

  throw new Error(`could not generate types —\n  ${failures.join('\n  ')}`)
}

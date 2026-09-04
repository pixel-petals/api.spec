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

/** `response-or-reference` is the key; `ResponseOrReference` is the type. */
export function typeNameFor(key) {
  return key.replace(/(^|[-_$])(.)/g, (_, __, letter) => letter.toUpperCase()).replace(/\W/g, '')
}

/**
 * Names every definition after its own key, and records what it chose.
 *
 * The generator is free to invent a name when it cannot derive one, and the
 * fragment declarations have to name these types from another file — so the
 * mapping is fixed here rather than recovered from the output afterwards.
 */
function namer(into) {
  return (_schema, key) => {
    if (!key) return undefined

    const name = typeNameFor(key)

    into.set(key, name)

    return name
  }
}

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

/**
 * Which type each definition ended up as.
 *
 * `customName` is asked first but fires for only a fraction of them — four of
 * OpenAPI 3.0's thirty-six — because the generator only calls it where it
 * needs to invent a name. For everything else it derives the same name this
 * does, so the derived one is tried against what the output actually declares.
 *
 * A definition with no declaration left — inlined into its only user, say —
 * gets no entry, and the fragment that names it falls back to `unknown`.
 */
function resolveNames(schema, captured, types) {
  const declared = new Set(types)
  const library = schema.$defs ?? schema.definitions ?? {}
  const names = new Map()

  // the generator keeps separators this does not — `openapiSchema_3_0` stays
  // `OpenapiSchema_3_0` — so a last pass compares the two with punctuation and
  // case removed, which is enough to tell them apart
  const loose = new Map()

  for (const type of types) {
    const key = type.replace(/\W|_/g, '').toLowerCase()

    if (!loose.has(key)) loose.set(key, type)
  }

  for (const key of new Set([ ...Object.keys(library), ...captured.keys() ])) {
    const derived = typeNameFor(key)
    const candidate = [ captured.get(key), derived ].find(name => name && declared.has(name))
      ?? loose.get(derived.replace(/\W|_/g, '').toLowerCase())

    if (candidate) names.set(key, candidate)
  }

  return names
}

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
 * @returns {Promise<{typescript: string, types: string[], strategy: string, names: Map<string,string>}>}
 */
export async function generate(schema, { name, id }) {
  // the generator names the root type after `$id` when there is one, which
  // turns a URL into an identifier; `title` is what it prefers, and the
  // specification's own name reads better than its release URL
  const prepared = { ...prepare(schema), title: name }
  const failures = []

  for (const strategy of STRATEGIES) {
    const names = new Map()

    try {
      const built = await strategy.build(structuredClone(prepared))
      const compiled = await compile(built, name, { ...OPTIONS, customName: namer(names) })
      const typescript = `${banner(name, id, strategy.name)}${restore(compiled)}`
      const types = [ ...typescript.matchAll(/^export (?:interface|type) (\w+)/gm) ].map(match => match[ 1 ])

      return { typescript, types, strategy: strategy.name, names: resolveNames(prepared, names, types) }
    } catch (error) {
      failures.push(`${strategy.name}: ${error.message || '(no message)'}`)
    }
  }

  throw new Error(`could not generate types —\n  ${failures.join('\n  ')}`)
}

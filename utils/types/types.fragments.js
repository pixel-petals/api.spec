/**
 * A TypeScript declaration beside every fragment.
 *
 * A fragment is a pointer into the vendored schema, and the root declaration
 * already holds a type for every object in it. So a fragment's declaration is
 * a re-export, not a second generation: no duplicated shapes, and no way for
 * the two to drift apart.
 *
 * The name follows the fragment rather than the definition — the file is
 * `components/responses`, so the type is `Response`, whatever the definition
 * behind it is spelled.
 */

import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { layout } from '#fragments/fragments.layout'
import { typeNameFor } from '#types/types.generate'

/** The vendored root declaration, from a fragment's own depth. */
function rootFrom(path, stem) {
  return `${'../'.repeat(path.length - 1)}${stem}.js`
}

function banner(name, from) {
  return [
    '/**',
    ` * ${name} — re-exported from the vendored schema's declarations.`,
    ' *',
    ' * Do not edit by hand.',
    ' */',
    '',
  ].join('\n')
}

/**
 * What a fragment's declaration says.
 *
 * One target is an alias, several are a union, and none means the fragment
 * points at a dialect — an open shape this cannot name.
 */
function declaration(fragment, names, root) {
  const exported = typeNameFor(fragment.def)
  const targets = fragment.defs.map(def => names.get(def)).filter(Boolean)

  if (!targets.length) {
    return `export type ${exported} = unknown\n`
  }

  if (targets.length === 1 && targets[ 0 ] === exported) {
    return `export type { ${exported} } from '${root}'\n`
  }

  if (targets.length === 1) {
    return `export type { ${targets[ 0 ]} as ${exported} } from '${root}'\n`
  }

  return [
    `import type { ${targets.join(', ')} } from '${root}'`,
    '',
    `export type ${exported} = ${targets.join(' | ')}`,
    '',
  ].join('\n')
}

/**
 * Writes one declaration per fragment.
 *
 * @param   {object} normalized  the normalized schema the fragments came from
 * @param   {string} into        the version directory
 * @param   {Map}    names       definition key -> the type the root declares
 * @param   {string} stem        basename of the root declaration
 * @returns {string[]} the files written
 */
export function writeFragmentTypes(normalized, into, names, stem) {
  return layout(normalized).map(fragment => {
    const file = resolve(into, `${fragment.path.join('/')}.d.ts`)
    const root = rootFrom(fragment.path, stem)
    const name = typeNameFor(fragment.def)

    writeFileSync(file, `${banner(name, root)}${declaration(fragment, names, root)}`, 'utf8')

    return file
  })
}

/**
 * Writes the fragment files a layout calls for.
 *
 * Overwrites freely — fragments are derived artefacts with nothing
 * hand-written in them, and refusing to overwrite would only make version
 * bumps annoying.
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

import { layout, targets } from './fragments.layout.js'

/**
 * A fragment is a pointer and nothing else — the indirection *is* the feature.
 *
 * It declares the draft of the document it points into, not a fixed one: a
 * 2020-12 wrapper around a draft-04 target is a cross-draft reference, and
 * validators disagree about what that means.
 */
function wrapper(draft, pointers) {
  const body = pointers.length === 1
    ? { $ref: pointers[ 0 ] }
    : { oneOf: pointers.map($ref => ({ $ref })) }

  return `${JSON.stringify({ $schema: draft, ...body }, null, 2)}\n`
}

/** Writes every fragment for a normalized schema, returning what was written. */
export function writeFragments(normalized, into, schemaFile) {
  return layout(normalized).map(fragment => {
    const file = `${fragment.path.join('/')}.json`
    const pointers = targets(normalized, fragment, schemaFile)
    const out = resolve(into, file)

    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, wrapper(normalized.draft, pointers), 'utf8')

    return { ...fragment, file, pointers }
  })
}

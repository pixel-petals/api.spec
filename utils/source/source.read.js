/** Reading a vendored document back off disk. */

import { readFileSync } from 'node:fs'

import { DOCUMENT, documentPath } from '#source/source.paths'

/** What to tell the user when nothing is vendored. */
const missing = (format, version, hint) =>
  new Error(`no ${DOCUMENT}.${format} for ${version}${hint ? ` — run \`${hint}\` first` : ''}`)

/**
 * Reads the JSON copy — the vendored formats are the same document, and JSON
 * is the one every version is guaranteed to have.
 *
 * @param {string} hint  what to tell the user to run when nothing is vendored
 */
export function readDocument(root, version, hint) {
  try {
    return JSON.parse(readFileSync(documentPath(root, version), 'utf8'))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error

    throw missing('json', version, hint)
  }
}

/**
 * Reads a vendored source that is a language rather than an object encoding —
 * protobuf IDL, GraphQL SDL — where there is nothing to parse on the way in.
 */
export function readSource(root, version, format, hint) {
  try {
    return readFileSync(documentPath(root, version, format), 'utf8')
  } catch (error) {
    if (error.code !== 'ENOENT') throw error

    throw missing(format, version, hint)
  }
}

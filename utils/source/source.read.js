/** Reading a vendored document back off disk. */

import { readFileSync } from 'node:fs'

import { DOCUMENT, documentPath } from '#source/source.paths'

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

    throw new Error(`no ${DOCUMENT}.json for ${version}${hint ? ` — run \`${hint}\` first` : ''}`)
  }
}

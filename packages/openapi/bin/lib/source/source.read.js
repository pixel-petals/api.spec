/** Reads a vendored schema back off disk. */

import { readFileSync } from 'node:fs'

import { SCHEMA_FILE, schemaPath } from './source.paths.js'

export function readSchema(version) {
  try {
    return JSON.parse(readFileSync(schemaPath(version), 'utf8'))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error

    throw new Error(`no ${SCHEMA_FILE} for ${version} — run \`openapi fetch ${version} <date>\` first`)
  }
}

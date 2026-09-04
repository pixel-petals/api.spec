/**
 * Turns a fetched schema document into the shape the rest of the library works
 * on: external source -> normalize -> process.
 *
 * Nothing downstream of this directory knows which draft or OpenAPI version it
 * is looking at. See normalize.md for the contract and how to add a version.
 */

import * as draft04 from './normalize.draft-04.js'
import * as draft202012 from './normalize.2020-12.js'

const NORMALIZERS = [ draft202012, draft04 ]

/** @returns {import('./normalize.walk.js').NormalizedSchema} */
export function normalizeSchema(schema) {
  const normalizer = NORMALIZERS.find(candidate => candidate.handles(schema))

  if (!normalizer) throw new Error(`unrecognised schema document — $schema is ${schema.$schema ?? '(absent)'}`)

  return normalizer.normalize(schema)
}

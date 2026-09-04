/** What the shared specification tooling needs to know about asyncapi. */

import { schemaRoot } from 'utils/spec/spec.descriptor'

/** @import { SpecDescriptor } from 'utils/spec/spec.descriptor' */

/**
 * AsyncAPI publishes each version twice. The `-without-$id` variant is the one
 * worth vendoring: its twin stamps an `$id` on every definition, which turns
 * all 434 internal references into absolute `http://asyncapi.com/...` URLs and
 * leaves nothing a local pointer can resolve.
 *
 * The `asyncapi.com/definitions/<version>.json` URL the repo README recommends
 * serves that same `$id` variant, so this reads the schema repository instead.
 */
function url(version) {
  return `https://raw.githubusercontent.com/asyncapi/spec-json-schemas/master/schemas/${version}-without-$id.json`
}

/** @type {SpecDescriptor} */
export const asyncapi = {
  name: 'asyncapi',
  description: 'Vendor the AsyncAPI schema and split it into $ref-able fragments',

  root: schemaRoot(import.meta.url),
  url,

  versionHint: '3.1.0',
}

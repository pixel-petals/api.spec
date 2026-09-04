/** What the shared specification tooling needs to know about OpenAPI. */

import { schemaRoot } from 'utils/spec/spec.descriptor'

/** @import { SpecDescriptor } from 'utils/spec/spec.descriptor' */

/**
 * OpenAPI publishes four resources per version — `meta`, `dialect`, `schema`
 * and `schema-base` — each addressed by a release date. Only `schema` is
 * vendored: a 3.1+ document states its own dialect in
 * `jsonSchemaDialect.default`, and earlier versions have no dialect at all, so
 * the other requests buy nothing.
 */
function url(version, date) {
  return `https://spec.openapis.org/oas/${version}/schema/${date}`
}

/** @type {SpecDescriptor} */
export const openapi = {
  name: 'openapi',
  description: 'Vendor the OpenAPI schema and split it into $ref-able fragments',

  root: schemaRoot(import.meta.url),
  url,

  dated: true,
  versionHint: '3.2',
  dateHint: '2025-11-23',
}

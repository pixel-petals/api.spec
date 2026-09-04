/** What the shared specification tooling needs to know about arazzo. */

import { schemaRoot } from 'utils/spec/spec.descriptor'

/** @import { SpecDescriptor } from 'utils/spec/spec.descriptor' */

/**
 * Arazzo publishes one resource per version, addressed by release date, the
 * same way OpenAPI does. There is no `schema-base` variant and no `latest`
 * alias — every release is spelled out.
 *
 * Releases are keyed by URL rather than by `$id`: the 1.0 2024-12-16 document
 * identifies itself as `.../2024-08-01`, a URL that does not resolve.
 */
function url(version, date) {
  return `https://spec.openapis.org/arazzo/${version}/schema/${date}`
}

/** @type {SpecDescriptor} */
export const arazzo = {
  name: 'arazzo',
  description: 'Vendor the Arazzo workflow schema and split it into $ref-able fragments',

  root: schemaRoot(import.meta.url),
  url,

  dated: true,
  versionHint: '1.1',
  dateHint: '2026-04-15',
}

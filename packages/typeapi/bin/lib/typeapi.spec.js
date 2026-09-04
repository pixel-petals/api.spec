/** Where the TypeAPI specification lives. */

import { schemaRoot } from 'utils/spec/spec.descriptor'

/**
 * TypeAPI publishes no per-version URL.
 *
 * Its repository carries no tags or releases, and TypeHub — where its versions
 * (0.1.0, 0.1.1) are actually registered — exposes no public export endpoint.
 * So a fetch reads the default branch and the version names what that branch
 * currently is, rather than addressing a release.
 */
export const typeapi = {
  name: 'typeapi',
  description: 'Vendor the TypeAPI specification and split it into TypeSchema documents',

  root: schemaRoot(import.meta.url),

  url: () => 'https://raw.githubusercontent.com/apioo/typeapi/main/specification/typeapi.json',
  baseUrl: 'https://raw.githubusercontent.com/apioo/typeschema/master/specification/typeschema.json',

  versionHint: '0.1.1',
}

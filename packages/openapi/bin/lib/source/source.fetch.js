/** Downloads a dated OpenAPI schema release and vendors it. */

import { mkdirSync, writeFileSync } from 'node:fs'

import { SCHEMA_FILE, schemaPath, versionDir } from './source.paths.js'

/** One of the resources the spec publishes per version. */
function url(version, date, resource = 'schema') {
  return `https://spec.openapis.org/oas/${version}/${resource}/${date}`
}

async function fetchJson(target) {
  const response = await fetch(target)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${target}`)

  return response.json()
}

/**
 * Writes schema/<version>/schema.json from the published release.
 *
 * Only `schema` is fetched. The dialect URL used to come from `schema-base`,
 * but a 3.1+ schema states it itself in `jsonSchemaDialect.default` and
 * earlier versions have no dialect at all, so the second request bought
 * nothing.
 */
export async function fetchSchema(version, date) {
  const source = url(version, date)
  const schema = await fetchJson(source)

  mkdirSync(versionDir(version), { recursive: true })
  writeFileSync(schemaPath(version), `${JSON.stringify(schema, null, 2)}\n`, 'utf8')

  return { schema, source, file: `${version}/${SCHEMA_FILE}` }
}

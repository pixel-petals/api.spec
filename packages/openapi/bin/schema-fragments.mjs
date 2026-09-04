#!/usr/bin/env node

import { dirname, resolve } from 'node:path'
import { mkdirSync, writeFileSync } from 'node:fs'

import { fileURLToPath } from 'node:url'

/**
 * Regenerates the editor-only wrapper schemas that give the OpenAPI bundle's
 * $ref'd fragment files validation and completion.
 *
 * Unlike scaffold-block.mjs this overwrites freely — the wrappers are derived
 * artefacts with nothing hand-written in them. See openapi-schemas.md.
 *
 * node scripts/openapi-schemas.mjs [version] [date]
 */

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = resolve(root, '.vscode/schemas')

const VERSION = '3.2'
const DATE = '2025-11-23'

/**
 * The bundle directory each `components` key is written to. Only the deviation
 * is listed: OpenAPI calls them schemas, the bundle has always called them
 * types.
 */
const DIRECTORIES = { schemas: 'types' }

/** One of the four resources the spec publishes per version. */
function url(version, date, resource) {
  return `https://spec.openapis.org/oas/${version}/${resource}/${date}`
}

async function fetchJson(target) {
  const response = await fetch(target)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${target}`)

  return response.json()
}

/**
 * The $defs name a `components` key holds, preferring the `-or-reference`
 * variant where one exists.
 *
 * The plain defs set `unevaluatedProperties: false`, which rejects a fragment
 * file that is itself a bare {"$ref": "./other.json"} — routine in a bundle.
 * The variant branches on that and is otherwise identical.
 */
function definitionFor(schema, key) {
  const pointer = schema.$defs.components.properties[ key ]?.additionalProperties?.$ref

  if (!pointer) return null

  const name = pointer.replace('#/$defs/', '')
  const variant = `${name}-or-reference`

  return schema.$defs[ variant ] ? variant : name
}

/** A wrapper is a pointer and nothing else — the indirection *is* the feature. */
function wrapper(target) {
  return `${JSON.stringify({
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $ref: target,
  }, null, 2)}\n`
}

const [ version = VERSION, date = DATE ] = process.argv.slice(2)

if (!/^\d+\.\d+$/.test(version) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('usage: node scripts/openapi-schemas.mjs [version] [date]')
  console.error('')
  console.error(`  version   OpenAPI minor, e.g. ${VERSION}`)
  console.error(`  date      the dated schema release, e.g. ${DATE}`)
  process.exit(1)
}

const schemaUrl = url(version, date, 'schema')

// allSettled, not all — exiting while the sibling request is still in flight
// trips a libuv assertion instead of reporting the failure
const responses = await Promise.allSettled([
  fetchJson(schemaUrl),
  fetchJson(url(version, date, 'schema-base')),
])

const failure = responses.find(response => response.status === 'rejected')

if (failure) {
  console.error(`could not read the OpenAPI ${version} schemas: ${failure.reason.message}`)
  console.error('Check the version and date against https://spec.openapis.org/oas/latest.html')
  process.exitCode = 1
}

const [ schema, base ] = responses.map(response => response.value)

if (!failure) generate(schema, base)

/**
 * Writes one wrapper per `components` key, then prints the settings block.
 *
 * The associations in .vscode/settings.json are edited by hand — it is a
 * shared file, and rewriting it would clobber unrelated settings.
 */
function generate(schema, base) {
  // schema-base is the only place the spec states its own default dialect, and
  // it moves on a different release cadence to the schema — so read it, never
  // assume it tracks `date`
  const dialect = base.$defs.dialect.const

  mkdirSync(OUT, { recursive: true })

  const written = []

  for (const key of Object.keys(schema.$defs.components.properties)) {
    const directory = DIRECTORIES[ key ] ?? key

    // a Schema Object is the one component the spec publishes a URL for; its
    // #/$defs/schema is a deliberately empty stub, because 3.1+ lets a document
    // pick its own dialect
    const definition = definitionFor(schema, key)
    const target = definition ? `${schemaUrl}#/$defs/${definition}` : dialect

    writeFileSync(resolve(OUT, `${directory}.json`), wrapper(target), 'utf8')
    written.push([ directory, definition ?? 'dialect' ])
  }

  for (const [ directory, definition ] of written) {
    console.log(`  ${`${directory}.json`.padEnd(24)} ${definition}`)
  }

  console.log('')
  console.log(`wrote ${written.length} wrappers to .vscode/schemas/ (OpenAPI ${version}, ${date})`)
  console.log(`dialect: ${dialect}`)
  console.log('')
  console.log('Associations are edited by hand in .vscode/settings.json:')

  for (const [ directory ] of written) {
    console.log(`  { "fileMatch": ["**/schema/bundle/${directory}/*.json"], "url": "./.vscode/schemas/${directory}.json" },`)
  }
}

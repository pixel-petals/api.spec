/** Locates the vendored schema tree. One version per directory. */

import { readdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/** The file each version directory vendors the upstream schema as. */
export const SCHEMA_FILE = 'schema.json'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')

export const SCHEMA_ROOT = resolve(root, 'schema')

export function versionDir(version) {
  return resolve(SCHEMA_ROOT, version)
}

export function schemaPath(version) {
  return resolve(versionDir(version), SCHEMA_FILE)
}

/** The versions already vendored. */
export function versions() {
  if (!existsSync(SCHEMA_ROOT)) return []

  return readdirSync(SCHEMA_ROOT, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name => existsSync(schemaPath(name)))
    .sort()
}

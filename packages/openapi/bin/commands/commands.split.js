/** `openapi split` — source -> normalize -> fragments, for one vendored version. */

import { normalizeSchema } from '../lib/normalize/normalize.js'
import { writeFragments } from '../lib/fragments/fragments.write.js'
import { SCHEMA_FILE, versionDir } from '../lib/source/source.paths.js'
import { readSchema } from '../lib/source/source.read.js'
import { reportFragments } from './commands.report.js'

export function splitCommand(version, options) {
  const normalized = normalizeSchema(readSchema(version))
  const written = writeFragments(normalized, versionDir(version), SCHEMA_FILE)

  if (!options?.quiet) reportFragments(written)

  const homed = written.filter(fragment => fragment.homed).length

  console.log('')
  console.log(`wrote ${written.length} fragments to schema/${version}/ (${normalized.id})`)
  console.log(`  ${homed} placed by the document's shape, ${written.length - homed} under fragments/`)
}

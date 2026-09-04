/**
 * TypeAPI's commands.
 *
 * The shared `spec.cli` runs a JSON Schema pipeline, which TypeAPI is not, so
 * the command names and output match the sibling packages while the work
 * underneath differs.
 */

import { resolve } from 'node:path'

import { DEFAULT_FORMATS } from 'utils/serialize/serialize.format'
import { writeDocument } from 'utils/serialize/serialize.write'
import { fetchDocument, vendorDocument } from 'utils/source/source.fetch'
import { readDocument } from 'utils/source/source.read'
import { versionDir, versions } from 'utils/source/source.paths'
import { reportVendored } from 'utils/spec/spec.report'

import { typeapi } from '#lib/typeapi.spec'
import { writeFragments } from '#lib/typeschema/typeschema.split'

/** The alias the specification imports its base document under. */
const IMPORTS = 'imports'

export async function fetchCommand(version) {
  const { url, files } = await vendorDocument({
    root: typeapi.root,
    version,
    url: typeapi.url(),
    formats: DEFAULT_FORMATS,
  })

  // the specification is a TypeSchema document that inherits from TypeSchema
  // itself; without its base beside it, `typeschema:` targets reach nothing
  const base = await fetchDocument(typeapi.baseUrl)
  const baseFiles = writeDocument(
    resolve(versionDir(typeapi.root, version), IMPORTS, 'typeschema'),
    base,
    DEFAULT_FORMATS,
  )

  reportVendored(url, files, typeapi.root)
  reportVendored(typeapi.baseUrl, baseFiles, typeapi.root)
}

export function splitCommand(version, options) {
  const document = readDocument(typeapi.root, version, `typeapi fetch ${version}`)
  const written = writeFragments(document, versionDir(typeapi.root, version))

  if (!options?.quiet) {
    const width = Math.max(...written.map(fragment => fragment.file.length))

    for (const fragment of written) {
      console.log(`  ${fragment.file.padEnd(width)}  ${fragment.def} (+${fragment.carries - 1} carried)`)
    }
  }

  const homed = written.filter(fragment => fragment.homed).length

  console.log('')
  console.log(`wrote ${written.length} fragments to ${version}/ (root: ${document.root})`)
  console.log(`  ${homed} placed by the document's shape, ${written.length - homed} under fragments/`)
}

export function listCommand() {
  const found = versions(typeapi.root)

  if (!found.length) return console.log('nothing vendored yet — run `typeapi fetch <version>`')

  for (const version of found) console.log(`  ${version}`)
}

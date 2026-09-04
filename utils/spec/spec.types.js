/** The `types` command: TypeScript declarations beside the vendored schema. */

import { writeFileSync } from 'node:fs'
import { relative } from 'node:path'

import { SOURCE_FORMAT } from '#serialize/serialize.format'
import { documentStem } from '#source/source.paths'
import { readDocument } from '#source/source.read'
import { generate } from '#types/types.generate'

/** @import { SpecDescriptor } from '#spec/spec.descriptor' */

/** A root type named after the specification, not after the file. */
function rootName(spec) {
  return spec.typeName ?? spec.name.replace(/(^|[-_])(.)/g, (_, __, letter) => letter.toUpperCase())
}

/** @param {SpecDescriptor} spec */
export function typesCommand(spec) {
  return async version => {
    const document = readDocument(spec.root, version, `${spec.name} fetch ${version}`, spec.sourceFormat ?? SOURCE_FORMAT)
    const id = document.$id ?? document.id ?? `${spec.name} ${version}`

    const { typescript, types, strategy } = await generate(document, { name: rootName(spec), id })
    const file = `${documentStem(spec.root, version)}.d.ts`

    writeFileSync(file, typescript, 'utf8')

    console.log(`wrote ${types.length} types to ${relative(spec.root, file).replaceAll('\\', '/')}`)
    console.log(`  strategy: ${strategy}`)
  }
}

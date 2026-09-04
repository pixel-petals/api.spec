/**
 * Writes the fragment files a layout calls for, in every requested format.
 *
 * Overwrites freely — fragments are derived artefacts with nothing
 * hand-written in them, and refusing to overwrite would only make version
 * bumps annoying.
 */

import { resolve } from 'node:path'

import { DEFAULT_FORMATS } from '#serialize/serialize.format'
import { writeVariants } from '#serialize/serialize.variants'
import { DOCUMENT } from '#source/source.paths'
import { contentFor } from '#fragments/fragments.content'
import { layout } from '#fragments/fragments.layout'

/**
 * Which fragment holds each definition.
 *
 * Keyed by every name a reference might use: the object's own, and the
 * reference-tolerant variant that stands for it, since a document points at
 * whichever suits the position.
 */
function indexOf(fragments) {
  const index = new Map()

  for (const fragment of fragments) {
    const path = fragment.path.join('/')

    index.set(fragment.def, path)

    for (const target of fragment.defs) index.set(target, path)
  }

  return index
}

/** `$defs` or `definitions`, taken from how this document spells a pointer. */
function keywordOf(normalized) {
  return normalized.pointer('x').split('/')[ 1 ]
}

/**
 * Writes every fragment for a normalized document.
 *
 * Each format points at its own copy — a YAML fragment references `.yaml`
 * siblings, its JSON twin `.json` ones — so a toolchain never has to cross
 * formats to resolve a reference.
 *
 * @returns {(import('#fragments/fragments.layout').Fragment & {file: string})[]}
 */
export function writeFragments(normalized, into, formats = DEFAULT_FORMATS) {
  const fragments = layout(normalized)
  const index = indexOf(fragments)
  const keyword = keywordOf(normalized)

  return fragments.map(fragment => {
    const from = fragment.path.join('/')
    const stem = resolve(into, ...fragment.path)

    const build = format => contentFor(fragment, normalized, { from, index, root: DOCUMENT, format, keyword })

    writeVariants(stem, build, formats)

    return { ...fragment, file: from, pointers: referencesIn(build(formats[ 0 ])) }
  })
}

/** The references a written fragment ended up carrying, for the report. */
function referencesIn(content) {
  const found = []

  const walk = node => {
    if (Array.isArray(node)) return node.forEach(walk)

    if (!node || typeof node !== 'object') return

    if (typeof node.$ref === 'string') found.push(node.$ref)

    Object.values(node).forEach(walk)
  }

  walk(content)

  return found.length ? found : [ '(inline)' ]
}

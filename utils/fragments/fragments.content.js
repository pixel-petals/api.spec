/**
 * What a fragment file holds.
 *
 * The definition's own body, so it can be read on its own, with every
 * reference inside it repointed at the sibling file that holds what it names.
 * Following a reference lands you in another readable fragment rather than
 * back in the vendored document. See fragments.md.
 */

import { dirname, relative } from 'node:path/posix'

const POINTER = /^#\/(?:\$defs|definitions)\/(.+)$/

/** `#workflowId` — a reference to an `$anchor` rather than to a path. */
const ANCHOR = /^#([^/].*)$/

/** A relative reference between two fragment paths, forward-slashed. */
function between(from, to) {
  const path = relative(dirname(from), to) || '.'

  return path.startsWith('.') ? path : `./${path}`
}

/**
 * Where a reference should now point.
 *
 * At the fragment holding what it names, when there is one. Everything else —
 * the constraint mixins that get no file of their own — stays a pointer, but
 * against the vendored document, which still holds them.
 */
function target(name, { from, index, root, format, keyword }) {
  const fragment = index.get(name)

  if (fragment) return `${between(from, fragment)}.${format}`

  return `${between(from, root)}.${format}#/${keyword}/${name}`
}

/** Every `$anchor` a body defines, so a reference to one can stay as it is. */
export function anchorsIn(node, found = new Set()) {
  if (Array.isArray(node)) {
    node.forEach(value => anchorsIn(value, found))
    return found
  }

  if (!node || typeof node !== 'object') return found

  if (typeof node.$anchor === 'string') found.add(node.$anchor)

  Object.values(node).forEach(value => anchorsIn(value, found))

  return found
}

/**
 * @param {*}      node   arbitrary JSON, walked as a schema
 * @param {object} where
 * @param {string} where.from    the fragment's own path
 * @param {Map}    where.index   definition name -> the fragment holding it
 * @param {string} where.root    path of the vendored document, no extension
 * @param {string} where.format  extension the references should name
 * @param {string} where.keyword the document's object-library keyword
 * @param {Set}    [where.anchors] anchors this body defines itself
 */
export function repoint(node, where) {
  if (Array.isArray(node)) return node.map(value => repoint(value, where))

  if (!node || typeof node !== 'object') return node

  // a `$ref` beside `properties` is in-place composition, not a leaf — the
  // reference is rewritten and the rest of the node still walked, or a body
  // that pulls in specification-extensions would keep every reference below it
  return Object.fromEntries(Object.entries(node).map(([ key, value ]) => {
    if (key !== '$ref' || typeof value !== 'string') return [ key, repoint(value, where) ]

    const named = POINTER.exec(value)?.[ 1 ]

    if (named) return [ key, target(named, where) ]

    // an anchor defined outside this body no longer resolves once the body is
    // its own file — Arazzo's `#workflowId` lives on the Workflow Object and is
    // referenced from Failure Action — so it points at the document that has it
    const anchor = ANCHOR.exec(value)?.[ 1 ]

    if (anchor && !where.anchors?.has(anchor)) {
      return [ key, `${between(where.from, where.root)}.${where.format}#${anchor}` ]
    }

    return [ key, value ]
  }))
}

/**
 * The body of one fragment.
 *
 * An object that tolerates a reference in place of itself keeps that: the body
 * sits beside a branch pointing at the Reference Object, which is how OpenAPI
 * 3.0 spells the same thing natively. A delegated Schema Object has no body to
 * carry and stays a pointer at its dialect.
 *
 * @param {object} fragment    from the layout
 * @param {object} normalized
 * @param {object} where       the same shape `repoint` takes
 */
export function contentFor(fragment, normalized, where) {
  const draft = { $schema: normalized.draft }

  if (normalized.dialect && normalized.isDelegated(fragment.def)) {
    return { ...draft, $ref: normalized.dialect }
  }

  const source = normalized.defs[ fragment.def ] ?? {}
  const body = repoint(source, { ...where, anchors: anchorsIn(source) })

  // the fragment names something other than the object itself only when the
  // specification offers a reference-tolerant form of it
  const tolerant = fragment.defs.length > 1 || fragment.defs[ 0 ] !== fragment.def
  const reference = normalized.reference && where.index.get(normalized.reference)

  if (!tolerant || !reference) return { ...draft, ...body }

  return {
    ...draft,
    if: { type: 'object', required: [ '$ref' ] },
    then: { $ref: `${between(where.from, reference)}.${where.format}` },
    else: body,
  }
}

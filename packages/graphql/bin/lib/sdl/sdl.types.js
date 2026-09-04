/** Splitting the introspection SDL into one definition per type. */

import { isTypeDefinitionNode, parse } from 'graphql'

/**
 * @typedef {object} SdlType
 * @property {string} name  the type's name, e.g. "__Schema"
 * @property {string} kind  the AST node kind, e.g. "ObjectTypeDefinition"
 * @property {string} sdl   the definition alone, verbatim
 */

/**
 * The definition as the section wrote it.
 *
 * `print` would round-trip the node instead, and drop every comment on the
 * way — and the comments in Section 4 carry the constraints the SDL cannot
 * state, such as which fields are non-null for which kind. Cutting at the
 * node's own boundaries keeps them without ever guessing where a type ends.
 */
function source(sdl, definition) {
  return sdl.slice(definition.loc.start, definition.loc.end)
}

/**
 * Every type the introspection schema declares, in source order.
 *
 * The definitions come off the AST rather than out of the text, so a fragment
 * is a definition the parser agreed to — not a span between two braces that
 * happened to look like one.
 *
 * @returns {SdlType[]}
 */
export function splitTypes(sdl) {
  return parse(sdl).definitions
    .filter(isTypeDefinitionNode)
    .map(definition => ({
      name: definition.name.value,
      kind: definition.kind,
      sdl: `${source(sdl, definition)}\n`,
    }))
}

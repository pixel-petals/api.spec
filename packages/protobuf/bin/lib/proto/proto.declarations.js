/**
 * What a parsed schema declares.
 *
 * Only the top level. A nested declaration is reachable only through its
 * parent, so it has no address of its own and travels inside its parent's
 * fragment — the same rule the sibling packages apply to inline objects.
 */

import protobuf from 'protobufjs'

/** @import { Enum, Namespace, Type } from 'protobufjs' */

/**
 * @typedef {object} Declaration
 * @property {string}      name      the declared name, e.g. "FileDescriptorProto"
 * @property {string}      fullName  package included, without the leading dot
 * @property {string}      kind      "message" or "enum"
 * @property {Type | Enum} node      the parsed declaration itself
 */

function kindOf(node) {
  return node instanceof protobuf.Type ? 'message' : 'enum'
}

/** @returns {Namespace} */
function namespace(root, packageName) {
  const found = root.lookup(packageName)

  if (!found) throw new Error(`no "${packageName}" package in the vendored schema`)

  return found
}

/**
 * Every addressable declaration, sorted by name.
 *
 * Messages and enums both qualify: either can be named from another file, and
 * a consumer looking one up should find a file rather than a gap. Services and
 * extensions are neither — the descriptor schema declares none.
 *
 * @returns {Declaration[]}
 */
export function declarations(root, packageName) {
  return namespace(root, packageName).nestedArray
    .filter(node => node instanceof protobuf.Type || node instanceof protobuf.Enum)
    .map(node => ({ name: node.name, fullName: node.fullName.replace(/^\./, ''), kind: kindOf(node), node }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

/** How many messages sit inside a declaration, at any depth. */
export function countNested(node) {
  const children = node.nestedArray?.filter(child => child instanceof protobuf.Type) ?? []

  return children.reduce((total, child) => total + 1 + countNested(child), 0)
}

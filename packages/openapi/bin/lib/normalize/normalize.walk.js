/**
 * Traversal shared by every normalizer.
 *
 * A containment position is one where a document nests another object: an
 * array's items, a map's values, or a property's own value. Reading a single
 * position is where the drafts differ, so that is passed in.
 */

const POINTER = /^#\/(?:\$defs|definitions)\/(.+)$/

/** The def name a local pointer names, or null if it points elsewhere. */
export function pointerTarget(ref) {
  return typeof ref === 'string' ? POINTER.exec(ref)?.[ 1 ] ?? null : null
}

/**
 * The defs a node contains, as opposed to composes.
 *
 * @param {object} node
 * @param {(node: object) => string | null} read  the draft's rule for one position
 */
export function contained(node, read, found = []) {
  if (!node || typeof node !== 'object') return found

  const direct = read(node)

  if (direct) {
    found.push(direct)
    return found
  }

  if (node.items) contained(node.items, read, found)
  if (node.additionalProperties) contained(node.additionalProperties, read, found)

  for (const value of Object.values(node.patternProperties ?? {})) contained(value, read, found)
  for (const value of Object.values(node.properties ?? {})) contained(value, read, found)

  return found
}

/** A key holding many named children becomes a directory; one object, a file. */
export function isCollection(node) {
  return node.type === 'array' || Boolean(node.additionalProperties)
}

/** Every root key that holds an object, and every key of the components map. */
export function groups(properties, read) {
  return Object.entries(properties ?? {})
    .map(([ key, node ]) => ({ key, collection: isCollection(node), holds: contained(node, read) }))
    .filter(group => group.holds.length)
}

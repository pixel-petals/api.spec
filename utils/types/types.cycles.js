/**
 * Cutting a schema's self-references.
 *
 * A definition that references itself is ordinary — OpenAPI's Encoding Object
 * nests encodings — and a generator that keeps references handles it as a
 * recursive type. One that resolves them first cannot: the resolved form is an
 * infinite tree, and walking it overflows.
 *
 * Replacing only the edge that points back at the definition being expanded
 * leaves everything else intact. What recurses becomes `unknown` at the point
 * it recurses; every other type keeps its shape.
 */

/** The keyword this document holds its object library under. */
function keywordOf(schema) {
  return schema.$defs ? '$defs' : schema.definitions ? 'definitions' : null
}

function cutFrom(node, pointer, seen = new WeakSet()) {
  if (Array.isArray(node)) return { value: node.map(item => cutFrom(item, pointer, seen).value), cuts: 0 }

  if (!node || typeof node !== 'object' || seen.has(node)) return { value: node, cuts: 0 }

  seen.add(node)

  if (node.$ref === pointer) return { value: {}, cuts: 1 }

  let cuts = 0

  const value = Object.fromEntries(Object.entries(node).map(([ key, child ]) => {
    const result = cutFrom(child, pointer, seen)

    cuts += result.cuts

    return [ key, result.value ]
  }))

  return { value, cuts }
}

/**
 * @param   {object} schema
 * @returns {{schema: object, cuts: number}}
 */
export function cutSelfReferences(schema) {
  const keyword = keywordOf(schema)

  if (!keyword) return { schema, cuts: 0 }

  let cuts = 0

  const defs = Object.fromEntries(Object.entries(schema[ keyword ]).map(([ name, definition ]) => {
    const result = cutFrom(definition, `#/${keyword}/${name}`)

    cuts += result.cuts

    return [ name, result.value ]
  }))

  return { schema: { ...schema, [ keyword ]: defs }, cuts }
}

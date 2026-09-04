/**
 * Normalizes the draft-04 OpenAPI schemas — 2.0 and 3.0.
 *
 * Objects live in `definitions`, reference tolerance is an inline
 * `oneOf: [Reference, X]`, and the Schema Object is a real def rather than a
 * stub. See normalize.md.
 */

import { groups, pointerTarget } from './normalize.walk.js'

const DRAFT = 'http://json-schema.org/draft-04/schema#'

export const handles = schema => schema.$schema === DRAFT && Boolean(schema.definitions)

/**
 * The Reference Object def, identified by the one thing only it requires.
 *
 * 2.0 has none — Swagger had no Reference Object — so the union handling below
 * switches itself off there.
 */
function referenceDef(defs) {
  return Object.entries(defs).find(([ , def ]) => def?.required?.includes('$ref'))?.[ 0 ] ?? null
}

/**
 * The branch of a Reference union carrying the actual object, or null when the
 * node is not one.
 *
 * 3.0 writes `oneOf: [Reference, Response]` wherever a `$ref` is legal, which
 * is the same idea 3.1+ spells as a `response-or-reference` def.
 */
function unionTarget(node, reference) {
  const branches = node.oneOf ?? node.anyOf

  if (!Array.isArray(branches)) return null

  const targets = branches.map(branch => pointerTarget(branch?.$ref))

  if (targets.some(target => !target)) return null

  const content = targets.filter(target => target !== reference)

  return content.length === 1 ? content[ 0 ] : null
}

/**
 * A choice between named objects is itself an object — 3.0 defines
 * `SecurityScheme` as a `oneOf` over its four concrete forms.
 *
 * Requiring every branch to be a local pointer is what separates it from a
 * constraint like `SchemaXORContent`, whose branches are bare `required`
 * clauses that shape nothing on their own.
 */
function isUnionOfObjects(def) {
  const branches = def.oneOf ?? def.anyOf

  return Array.isArray(branches) && branches.length > 0
    && branches.every(branch => pointerTarget(branch?.$ref))
}

/**
 * A def can stand alone in a file only if it describes a shape. The rest —
 * SchemaXORContent, and the PathParameter-style refinements that only
 * constrain a Parameter's `in` and `style` — would validate nothing in a file.
 */
function isShaped(def) {
  return Boolean(def) && (
    def.type !== undefined
    || def.additionalProperties !== undefined
    || def.items !== undefined
    || isUnionOfObjects(def)
  )
}

/**
 * Reads one containment position.
 *
 * draft-04 gives a `$ref` no siblings — they are ignored outright — so unlike
 * 2020-12 there is no composition case to guard against.
 */
function reader(reference) {
  return node => pointerTarget(node.$ref) ?? unionTarget(node, reference)
}

/** Every def the document ever unions with a Reference. */
function referencable(schema, reference) {
  const found = new Set()

  function walk(node) {
    if (!node || typeof node !== 'object') return

    const target = unionTarget(node, reference)

    if (target) found.add(target)

    for (const value of Object.values(node)) {
      if (Array.isArray(value)) value.forEach(walk)
      else walk(value)
    }
  }

  walk(schema.properties)
  walk(schema.definitions)

  return found
}

export function normalize(schema) {
  const defs = schema.definitions
  const reference = referenceDef(defs)
  const read = reader(reference)
  const unioned = reference ? referencable(schema, reference) : new Set()

  const components = pointerTarget(schema.properties?.components?.$ref)

  return {
    id: schema.$id ?? schema.id ?? '(no $id)',
    draft: DRAFT,
    pointer: name => `#/definitions/${name}`,

    // 3.0 and 2.0 define a real, restricted Schema Object — nothing to delegate
    dialect: null,
    isDelegated: () => false,

    objects: Object.keys(defs)
      .filter(name => isShaped(defs[ name ]))
      .map(name => ({
        name,
        targets: unioned.has(name) ? [ reference, name ] : [ name ],
      })),

    roots: groups(schema.properties, read),

    // 2.0 has no components map — Swagger put its reusable objects on the root
    components: groups(components ? defs[ components ]?.properties : null, read),
  }
}

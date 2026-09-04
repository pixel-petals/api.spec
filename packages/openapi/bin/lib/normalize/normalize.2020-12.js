/**
 * Normalizes the 2020-12 OpenAPI schemas — 3.1 and 3.2.
 *
 * Objects live in `$defs`, reference tolerance is a named `-or-reference` def,
 * and the Schema Object is a stub delegating to a dialect. See normalize.md.
 */

import { groups, pointerTarget } from './normalize.walk.js'

const VARIANT_SUFFIX = '-or-reference'

const DRAFT = 'https://json-schema.org/draft/2020-12/schema'

export const handles = schema => schema.$schema === DRAFT && Boolean(schema.$defs)

/**
 * A def can stand alone in a file only if it describes a shape. The rest —
 * specification-extensions, examples, explode-for-form — only add constraints
 * to whatever composes them, so a file containing one would validate nothing.
 */
function isShaped(def) {
  return Boolean(def) && (
    def.type !== undefined
    || def.additionalProperties !== undefined
    || def.items !== undefined
    || def.$dynamicAnchor !== undefined
  )
}

/** The def carrying the `$dynamicAnchor` a `$dynamicRef` resolves to. */
function anchored(defs) {
  return Object.entries(defs).find(([ , def ]) => def?.$dynamicAnchor)?.[ 0 ] ?? null
}

/**
 * The object a def names, with the variant spelling stripped.
 *
 * A document points at `response-or-reference` where a `$ref` is legal, but
 * the object living there is a Response either way. Downstream names objects,
 * not spellings, so the distinction is resolved here and survives only in the
 * pointer a fragment file ends up carrying.
 */
function baseName(name) {
  return name.endsWith(VARIANT_SUFFIX) ? name.slice(0, -VARIANT_SUFFIX.length) : name
}

/**
 * Reads one containment position.
 *
 * A `$ref` sitting alongside `properties` is in-place composition — the way
 * every object pulls in specification-extensions — and names no child, so only
 * a leaf `$ref` counts.
 */
function reader(defs) {
  const hook = anchored(defs)

  return node => {
    const isLeaf = !node.properties && !node.additionalProperties && !node.patternProperties
    const target = pointerTarget(node.$ref)

    if (target && isLeaf) return baseName(target)

    // a $dynamicRef in a container position is always the Schema Object hook
    return node.$dynamicRef ? hook : null
  }
}

/**
 * The defs a fragment points at, preferring the `-or-reference` variant.
 *
 * The plain defs set `unevaluatedProperties: false`, which rejects a fragment
 * file that is itself a bare {"$ref": "./other.json"} — routine in a bundle.
 * The variant branches on that and is otherwise identical. Which objects have
 * one moves between versions, so it is read rather than listed.
 */
function targetsFor(defs, name) {
  const variant = `${name}${VARIANT_SUFFIX}`

  return defs[ variant ] ? [ variant ] : [ name ]
}

export function normalize(schema) {
  const defs = schema.$defs
  const read = reader(defs)

  const components = pointerTarget(schema.properties?.components?.$ref)

  return {
    id: schema.$id ?? '(no $id)',
    draft: DRAFT,
    pointer: name => `#/$defs/${name}`,

    // 3.1+ lets a document choose its own dialect, so its Schema Object def is
    // an empty stub and fragments must target the dialect instead
    dialect: schema.properties?.jsonSchemaDialect?.default ?? null,
    isDelegated: name => Boolean(defs[ name ]?.$dynamicAnchor),

    objects: Object.keys(defs)
      .filter(name => !name.endsWith(VARIANT_SUFFIX) && isShaped(defs[ name ]))
      .map(name => ({ name, targets: targetsFor(defs, name) })),

    roots: groups(schema.properties, read),
    components: groups(components ? defs[ components ]?.properties : null, read),
  }
}

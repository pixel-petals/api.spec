/**
 * Making a meta-schema safe to generate TypeScript from.
 *
 * `json-schema-to-typescript` is built for schemas that describe *data*. These
 * describe *documents*, and a document's properties are JSON Schema keywords —
 * OpenAPI declares properties literally named `$ref` and `deprecated`, because
 * that is what an OpenAPI document contains.
 *
 * The generator reads a `properties` map as a schema in places, so those names
 * are taken as keywords: a `$ref` whose value is an object looks like an
 * unresolved reference, and a `deprecated` that is not a boolean fails
 * validation. Renaming them across the boundary and back is what lets a
 * meta-schema through without changing the type that comes out.
 *
 * See types.md.
 */

/** Keywords whose value is a map of schemas, keyed by names the author chose. */
const SCHEMA_MAPS = new Set([ 'properties', 'patternProperties', '$defs', 'definitions', 'dependentSchemas' ])

/** Keywords whose value is a single schema. */
const SCHEMA_VALUES = new Set([
  'items', 'additionalItems', 'unevaluatedItems', 'additionalProperties', 'unevaluatedProperties',
  'contains', 'propertyNames', 'if', 'then', 'else', 'not',
])

/** Keywords whose value is an array of schemas. */
const SCHEMA_LISTS = new Set([ 'allOf', 'anyOf', 'oneOf', 'prefixItems' ])

/**
 * Annotations that carry sample documents rather than structure.
 *
 * AsyncAPI's examples contain `{"$ref": "path/to/user-create.avsc"}` — an
 * illustration of what a user would write, not a reference this document
 * makes. A resolver cannot tell the difference and tries to fetch it.
 */
const ANNOTATIONS = new Set([ 'examples', 'example', 'default' ])

/**
 * Identifiers on a nested definition.
 *
 * The generator names a type after one when it finds it, so AsyncAPI 1.x —
 * whose definitions each carry `id` in the draft-04 spelling — produced
 * `HttpAsyncapiComDefinitions100ContactJson` where `Contact` was meant, and
 * nothing downstream could work out which definition that was. References here
 * are path-based, so the identifiers earn nothing and cost the names.
 *
 * The root keeps its own: it is named from the descriptor instead.
 */
const IDENTIFIERS = new Set([ 'id', '$id' ])

/**
 * Property names the generator would read as keywords.
 *
 * A meta-schema declares properties named after the very keywords it
 * describes: OpenAPI has `$ref` and `deprecated`, AsyncAPI embeds a draft-07
 * metaschema whose properties include `allOf`, `anyOf`, `oneOf` and `items`.
 * Where the generator mistakes a `properties` map for a schema, it reads those
 * names as structure — `anyOf` as an array to iterate, `$ref` as a reference
 * to resolve — and fails on the schema sitting there instead.
 *
 * Only keywords that carry *structure* are renamed — the ones the generator
 * would follow into. A keyword like `enum` or `type` holds no schema, so it is
 * left alone: renaming it and restoring it afterwards is what produced two
 * `enum` members in one interface, since AsyncAPI's embedded draft-07
 * metaschema declares a property by that name beside the keyword itself.
 */
const RESERVED = [
  '$ref', '$defs', 'definitions', 'deprecated',
  'allOf', 'anyOf', 'oneOf', 'not', 'if', 'then', 'else',
  'items', 'additionalItems', 'unevaluatedItems', 'prefixItems', 'contains',
  'properties', 'patternProperties', 'additionalProperties', 'unevaluatedProperties',
  'propertyNames', 'dependentSchemas',
]

const placeholder = name => `__property_${name.replace(/\W/g, '')}__`

/** Restores the real names once the generator has produced its text. */
export function restore(typescript) {
  return RESERVED.reduce((text, name) => text.replaceAll(placeholder(name), name), typescript)
}

/** An anchor reference, which resolves against `$anchor` rather than a path. */
const isAnchor = ref => ref.startsWith('#') && !ref.startsWith('#/')

/** A map of schemas: the keys are names, so only the values are schemas. */
function mapOfSchemas(value, renameKeys) {
  return Object.fromEntries(Object.entries(value).map(([ name, schema ]) => [
    renameKeys && RESERVED.includes(name) ? placeholder(name) : name,
    prepare(schema, { nested: true }),
  ]))
}

/**
 * A schema the generator can work on.
 *
 * @param {*}       node  arbitrary JSON, walked as a schema
 * @param {object}  [options]
 * @param {boolean} [options.nested]  true below the root, where identifiers go
 */
export function prepare(node, { nested = false } = {}) {
  if (Array.isArray(node)) return node.map(value => prepare(value, { nested }))

  if (!node || typeof node !== 'object') return node

  // a dynamic reference has no fixed target, a reference out of the document
  // names a dialect, and an anchor resolves against something no resolver here
  // tracks — all three describe an open shape, which is `unknown`
  if (node.$dynamicRef) return {}

  if (typeof node.$ref === 'string' && (!node.$ref.startsWith('#') || isAnchor(node.$ref))) return {}

  const out = {}

  for (const [ key, value ] of Object.entries(node)) {
    if (ANNOTATIONS.has(key)) continue

    if (nested && IDENTIFIERS.has(key)) continue

    if (SCHEMA_MAPS.has(key) && value && typeof value === 'object') {
      out[ key ] = mapOfSchemas(value, key === 'properties')
      continue
    }

    if (SCHEMA_VALUES.has(key) && value && typeof value === 'object') {
      out[ key ] = prepare(value, { nested: true })
      continue
    }

    if (SCHEMA_LISTS.has(key) && Array.isArray(value)) {
      out[ key ] = value.map(item => prepare(item, { nested: true }))
      continue
    }

    out[ key ] = value
  }

  // A pattern alongside named properties becomes a string index signature, and
  // TypeScript requires every declared property to satisfy it. `^x-` extensions
  // sit beside real fields in almost every one of these specifications, so the
  // signature is widened to `unknown` — the type system cannot say "these keys
  // match a pattern and those do not", and a wrong narrow type is worse than an
  // honest wide one.
  if (out.patternProperties && out.properties) {
    out.patternProperties = Object.fromEntries(Object.keys(out.patternProperties).map(pattern => [ pattern, {} ]))
  }

  // `required` names properties, so a renamed one has to be renamed here too
  if (Array.isArray(out.required)) {
    out.required = out.required.map(name => (RESERVED.includes(name) ? placeholder(name) : name))
  }

  return out
}

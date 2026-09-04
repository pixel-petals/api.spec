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
 * Property names the generator would read as keywords.
 *
 * A meta-schema declares properties named after the very keywords it
 * describes: OpenAPI has `$ref` and `deprecated`, AsyncAPI embeds a draft-07
 * metaschema whose properties include `allOf`, `anyOf`, `oneOf` and `items`.
 * Where the generator mistakes a `properties` map for a schema, it reads those
 * names as structure — `anyOf` as an array to iterate, `$ref` as a reference
 * to resolve — and fails on the schema sitting there instead.
 *
 * Every keyword that carries structure is renamed, rather than only the ones
 * seen to break so far, because which of them appears is a property of the
 * specification being read and not of this list.
 */
const RESERVED = [
  '$ref', '$defs', 'definitions', 'deprecated',
  'allOf', 'anyOf', 'oneOf', 'not', 'if', 'then', 'else',
  'items', 'additionalItems', 'unevaluatedItems', 'prefixItems', 'contains',
  'properties', 'patternProperties', 'additionalProperties', 'unevaluatedProperties',
  'propertyNames', 'dependentSchemas', 'required', 'enum', 'type',
  'maxItems', 'minItems', 'tsEnumNames',
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
    prepare(schema),
  ]))
}

/**
 * A schema the generator can work on.
 *
 * @param {*} node  arbitrary JSON, walked as a schema
 */
export function prepare(node) {
  if (Array.isArray(node)) return node.map(prepare)

  if (!node || typeof node !== 'object') return node

  // a dynamic reference has no fixed target, a reference out of the document
  // names a dialect, and an anchor resolves against something no resolver here
  // tracks — all three describe an open shape, which is `unknown`
  if (node.$dynamicRef) return {}

  if (typeof node.$ref === 'string' && (!node.$ref.startsWith('#') || isAnchor(node.$ref))) return {}

  const out = {}

  for (const [ key, value ] of Object.entries(node)) {
    if (ANNOTATIONS.has(key)) continue

    if (SCHEMA_MAPS.has(key) && value && typeof value === 'object') {
      out[ key ] = mapOfSchemas(value, key === 'properties')
      continue
    }

    if (SCHEMA_VALUES.has(key) && value && typeof value === 'object') {
      out[ key ] = prepare(value)
      continue
    }

    if (SCHEMA_LISTS.has(key) && Array.isArray(value)) {
      out[ key ] = value.map(prepare)
      continue
    }

    out[ key ] = value
  }

  // `required` names properties, so a renamed one has to be renamed here too
  if (Array.isArray(out.required)) {
    out.required = out.required.map(name => (RESERVED.includes(name) ? placeholder(name) : name))
  }

  return out
}

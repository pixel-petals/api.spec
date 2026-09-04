/**
 * Decides where each fragment file goes, from a normalized schema.
 *
 * The document's own shape is the hierarchy: a fragment goes where a bundle
 * author could point at it and say the file belongs there. Everything else is
 * an inline object with no canonical home, and lands in fragments/.
 * See fragments.md.
 */

/**
 * Everything generated lives under this directory, leaving `schema.json` alone
 * at the version root — the one hand-fetched file, not mixed in with derived
 * ones.
 */
const DEFS = 'defs'

const FRAGMENTS = 'fragments'

/**
 * Def names are kebab in 3.1+ and Pascal in 3.0; the file tree is camelCase.
 *
 * A leading run of capitals is an acronym, so it lowercases whole — `XML`
 * becomes `xml` and `HTTPSecurityScheme` becomes `httpSecurityScheme` rather
 * than `hTTPSecurityScheme`.
 */
function camel(name) {
  return name
    .replace(/-(.)/g, (_, letter) => letter.toUpperCase())
    .replace(/^[A-Z]+(?![a-z])/, run => run.toLowerCase())
    .replace(/^[A-Z]/, first => first.toLowerCase())
}

/**
 * The two places a fragment provably belongs: a key of the document root, and
 * a key of its components map. Both are addressable in a real document, so
 * both are a home. Anything deeper is only reachable through a parent that is
 * itself inline, so its location would be a guess.
 */
function homes(normalized) {
  const placed = new Map()

  const place = (name, path) => placed.set(name, [ ...(placed.get(name) ?? []), path ])

  for (const { key, collection, holds } of normalized.roots) {
    for (const name of holds) place(name, collection ? [ key, camel(name) ] : [ camel(key) ])
  }

  for (const { key, holds } of normalized.components) {
    for (const name of holds) place(name, [ 'components', key ])
  }

  return placed
}

/**
 * @typedef {object} Fragment
 * @property {string[]} path   directory segments, then the file stem
 * @property {string}   def    the def name the file points at
 * @property {string[]} defs   every def the file points at; many means a union
 * @property {boolean}  homed  true when the document's shape placed it
 */

/**
 * Every fragment file to write, sorted by path.
 * @returns {Fragment[]}
 */
export function layout(normalized) {
  const placed = homes(normalized)

  return normalized.objects
    .map(({ name, targets }) => {
      // one home is a location; several is a guess, and none is a fragment
      const homed = placed.get(name)?.length === 1
      const home = homed ? placed.get(name)[ 0 ] : [ FRAGMENTS, camel(name) ]

      return { path: [ DEFS, ...home ], def: name, defs: targets, homed }
    })
    .sort((a, b) => a.path.join('/').localeCompare(b.path.join('/')))
}

/**
 * The pointers a fragment file carries — relative, back into the vendored
 * schema, so validation needs no network and stays pinned to the copy in the
 * repo. More than one means a Reference union.
 *
 * A delegated Schema Object is the exception: 3.1+ leaves its def an empty
 * stub so a document can pick its own dialect, so the fragment targets that
 * dialect instead.
 *
 * @returns {string[]}
 */
export function targets(normalized, fragment, schemaFile) {
  if (normalized.dialect && normalized.isDelegated(fragment.def)) return [ normalized.dialect ]

  // every fragment sits at least one level down, under defs/
  const up = '../'.repeat(fragment.path.length - 1)

  return fragment.defs.map(name => `${up}${schemaFile}${normalized.pointer(name)}`)
}

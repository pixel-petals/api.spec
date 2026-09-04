# Normalizing a schema document

`external source -> normalize -> process`

`schema.fetch.js` brings a document in. A normalizer turns it into the shape the rest of the library works on. Nothing downstream of this directory knows which draft or OpenAPI version it is looking at.

## The contract

A normalizer returns a `NormalizedSchema`:

| field | meaning |
| --- | --- |
| `id` | the document's own identifier, for reporting |
| `draft` | the `$schema` a fragment file must declare to point into it |
| `pointer(name)` | a local JSON pointer to one object def |
| `dialect` | the URL Schema Objects delegate to, or `null` if the version defines its own |
| `objects` | every def worth a fragment file, each with the def names it should point at |
| `roots` | document root keys that hold objects |
| `components` | keys of the components map that hold objects |

`roots` and `components` entries are `{ key, collection, holds }` — `collection` says whether the key holds many named children (a directory) or one object (a file), and `holds` names the defs found there.

An `objects` entry is `{ name, targets }`. `targets` is usually one def name. More than one means a union, which the writer emits as a `oneOf`.

## Why the differences live here

The two drafts disagree on more than spelling.

**Where objects live.** 2020-12 uses `$defs`, draft-04 uses `definitions`. That changes both the lookup and every pointer written into a fragment file.

**How "X or a Reference" is said.** A bundle file is often a bare `{"$ref": "./other.json"}`, so a fragment has to tolerate one. 3.1+ names a `response-or-reference` def per object and the normalizer prefers it. 3.0 has no such def and writes `oneOf: [Reference, Response]` inline instead, so the normalizer reproduces that union in the fragment. Same intent, two spellings, one normalized `targets` list.

**What a `$ref` beside `properties` means.** In 2020-12 it is in-place composition — the way every object pulls in `specification-extensions` — and names no child. In draft-04 a `$ref` ignores its siblings entirely, so the case does not arise. Only the 2020-12 walker needs the guard.

**What a Schema Object is.** 3.1+ lets a document choose its own JSON Schema dialect, so its Schema Object def is a deliberately empty stub and fragments must target the dialect. 3.0 and 2.0 define a real, restricted Schema Object, so `dialect` is `null` and the ordinary pointer is correct.

**Which defs are objects.** Both drafts carry constraint-only defs that would validate nothing in a file — `specification-extensions` and `examples` in 3.1+, `SchemaXORContent` and the `PathParameter` refinements in 3.0. Both normalizers filter on shape rather than on a list, so a version that renames one needs no edit.

## Adding a version

Add a module here, register it in `normalize.js`, and return the contract above. If a new version only respells things the existing normalizers already read from the document, it will work without a new file — 2.0 and 3.0 share `normalize.draft-04.js`, and 3.1 and 3.2 share `normalize.2020-12.js`, because the differences between them are all data the normalizer already reads.

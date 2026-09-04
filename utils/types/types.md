# TypeScript declarations

```sh
<name> types <version>
```

Writes `schema/<version>/schema.d.ts` — every object in the schema, as one file — and a declaration beside every fragment:

```text
schema/3.2/
  schema.d.ts                          42 types
  defs/info.d.ts                       export type { Info } from '../schema.js'
  defs/components/responses.d.ts       export type { ResponseOrReference as Response } from '../../schema.js'
```

A fragment's declaration is a **re-export**, not a second generation. The root already holds a type for every object, so re-exporting means no duplicated shapes and no way for the two to drift. The exported name follows the fragment — the file is `components/responses`, so the type is `Response`, whatever the definition behind it is spelled.

```ts
import type { Response } from '@pixelpetals/openapi/3.2/defs/components/responses.js'
```

`json-schema-to-typescript` does the generating. What lives here is everything needed to hand it a meta-schema, which is not what it was built for.

## Why a meta-schema is different

These documents describe *documents*, not data. That difference shows up in four ways, each of which stopped the generator outright before it was handled.

**A document's properties are JSON Schema keywords.** OpenAPI declares properties literally named `$ref` and `deprecated`, because that is what an OpenAPI document contains. AsyncAPI embeds a whole draft-07 metaschema, whose properties include `allOf`, `anyOf`, `oneOf` and `items`. The generator reads a `properties` map as a schema in places, so it takes those names as structure — `anyOf` as an array to iterate, `$ref` as a reference to resolve — and falls over on the schema sitting there instead. Every structural keyword is renamed on the way in and restored in the generated text, which leaves the emitted type identical.

**Examples contain references that are not references.** AsyncAPI's examples include `{"$ref": "path/to/user-create.avsc"}` — an illustration of what a user would write. A resolver cannot tell that from a real reference and tries to fetch it. Annotations are dropped, since they contribute nothing to a type.

**Some references have no target to resolve.** A `$dynamicRef` has no fixed one, a reference out of the document names a dialect, and Arazzo uses `#anchor` form that resolves against `$anchor` rather than a path. All three describe an open shape, so all three become `unknown`.

**Recursion has no resolved form.** OpenAPI's Encoding Object nests encodings. Kept as a reference this is an ordinary recursive type; resolved, it is an infinite tree that overflows the walker.

## Three strategies, best first

Which one a version needs is not predictable, so each is tried in turn and the one that worked is recorded in the generated file's banner.

| strategy | what it costs | who needs it |
| --- | --- | --- |
| references kept | nothing | most versions |
| references resolved | names — a resolved reference is no longer one | OpenAPI 3.1, Arazzo |
| self-references cut | the shape of whatever recursed, and nothing else | OpenAPI 3.2 |

Leaving references in place is always tried first because it keeps each definition a named type. It shows: AsyncAPI 3.1.0 yields 152 types that way and 120 resolved.

## Options that matter

`unreachableDefinitions` is the important one. Without it only what the root reaches gets a type — and MCP's root reaches nothing at all, since the document is a bag of `$defs` a consumer points into. Every named object would be dropped.

The root type is named from the descriptor rather than the document. The generator prefers `$id` when there is one, which turns a release URL into an identifier like `HttpsSpecOpenapisOrgOas32Schema20251123`.

## Widened index signatures

`patternProperties` becomes a string index signature, and TypeScript requires every declared property to satisfy it. Since `^x-` extensions sit beside real fields in nearly all of these specifications, that produced 3060 errors on its own.

Where a node has both a pattern and named properties, the signature is widened to `unknown`. The type system cannot say "these keys match a pattern and those do not", and a wrong narrow type is worse than an honest wide one.

## What is not covered

TypeAPI, protobuf and GraphQL publish no JSON Schema, so none of this applies to them. Protobuf and GraphQL both have first-class type generators of their own — `protobufjs` emits `.d.ts` from a descriptor, and GraphQL Code Generator from SDL — which would be the right tools if those packages ever want declarations.

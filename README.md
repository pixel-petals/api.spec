# api/spec

Vendored API specification schemas, split into per-object fragments an editor can validate against.

Each package downloads a published specification document, keeps it verbatim, and derives one small file per object a reference can point at — so a bundle file holding a single Response or Operation gets validated as what it is, rather than rejected as an incomplete document.

## Packages

| package | vendors | formats | fragments |
| --- | --- | --- | --- |
| [openapi](packages/openapi) | OpenAPI 2.0, 3.0, 3.1, 3.2 | JSON, YAML | pointers |
| [asyncapi](packages/asyncapi) | AsyncAPI 2.6.0, 3.1.0 | JSON, YAML | pointers |
| [arazzo](packages/arazzo) | Arazzo 1.0, 1.1 | JSON, YAML | pointers |
| [mcp](packages/mcp) | MCP 2025-06-18, 2026-07-28 | JSON, YAML | pointers |
| [typeapi](packages/typeapi) | TypeAPI 0.1.1 | JSON, YAML | whole documents |
| [protobuf](packages/protobuf) | Protobuf 36.1 | proto, JSON | JSON descriptors |

Every package has the same four commands:

```sh
<name> fetch <version> [date]     # vendor a release
<name> split <version>            # derive fragments from it, offline
<name> generate <version> [date]  # both
<name> list                       # what is vendored
```

## Not every specification fits

Four of these publish a JSON Schema describing themselves, so they share one pipeline and a package is barely thirty lines. The other two do not, and their differences are the interesting part:

- **TypeAPI** documents are TypeSchema, not JSON Schema — no `$schema`, no `$ref`, references are typed nodes. TypeSchema imports whole documents and cannot address a definition inside another file, so a pointer fragment would have nothing to point with. Each fragment is instead a valid standalone document carrying its own transitive closure.
- **Protobuf** has a genuine object library in `descriptor.proto`, but it is protobuf IDL. Fragments are JSON descriptors only: a message is not a compilation unit, so an extracted `.proto` would not compile.

**GraphQL has no machine-readable schema of itself at all.** Its specification is prose Markdown, its grammar a bespoke BNF notation, and its introspection schema exists only as SDL inside code fences in `Section 4 -- Introspection.md`. See [packages/graphql](packages/graphql) for what is vendored instead.

## Shared machinery

Everything generic lives in [utils](utils/README.md), on one axis: **external source → normalize → process**. That document covers where a fragment goes and why, how the JSON Schema drafts differ, and what to do when adding a specification.

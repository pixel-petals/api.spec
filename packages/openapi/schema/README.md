# Vendored OpenAPI schemas

Generated. Do not edit by hand — run `openapi split <version>`.

One directory per OpenAPI version. `schema.json` in each is the published schema, verbatim, and is the only file not generated. Everything under `defs/` is a fragment schema — a pointer back into `schema.json` that lets an editor validate a single `$ref`-linked bundle file.

| version | release | fragments |
| --- | --- | --- |
| 2.0 | 2017-08-27 | 46 |
| 3.0 | 2024-10-18 | 36 |
| 3.1 | 2025-11-23 | 28 |
| 3.2 | 2025-11-23 | 29 |

2.0 and 3.0 are draft-04 documents and keep their objects in `definitions`; 3.1 and 3.2 are 2020-12 and use `$defs`. Each fragment declares the draft of the document it points into, so a validator is never asked to resolve across drafts.

Why a fragment lands where it does: [fragments.md](../bin/lib/fragments/fragments.md). What each one targets, and how the versions differ: [normalize.md](../bin/lib/normalize/normalize.md).

# OpenAPI fragment schemas

Generated. Do not edit by hand — run `npm run schemas:openapi`.

These give the `$ref`-linked fragment files under `apps/cms/schema/bundle/` validation and completion in the editor. One wrapper per key of the OpenAPI `components` map, named after the bundle subdirectory it validates.

Why the indirection is needed, why each wrapper targets the def it does, and what this setup cannot catch: [scripts/openapi-schemas.md](../../scripts/openapi-schemas.md).

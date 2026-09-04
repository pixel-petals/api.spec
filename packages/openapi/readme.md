# openapi-schemas

Regenerates `.vscode/schemas/` — the wrapper schemas that give the `$ref`-linked fragment files under `apps/cms/schema/bundle/` validation and completion in the editor.

```
npm run schemas:openapi              # OpenAPI 3.2, the pinned dated release
npm run schemas:openapi -- 3.2 2026-03-01
```

Output is editor-only. Nothing here reaches the built spec, and the bundler never reads it.

## Why wrappers exist at all

Each fragment file is a single *component object*, not a spec, so the document-level schema rejects it outright.

OpenAPI publishes only four URLs per version — `meta`, `dialect`, `schema`, `schema-base` — and none addresses an individual component. The component types exist only as `$defs` inside the 40KB `schema` document, reachable by JSON pointer.

A pointer cannot go in the `json.schemas` association URL. VS Code loads that URL and parses the response body as the root schema; the fragment is dropped, so `…/schema#/$defs/response` silently validates the file as a whole OpenAPI document. `$ref` *does* resolve pointers — hence one wrapper file per component type.

## Why it derives rather than hardcodes

The set of things worth splitting out is the spec's own `components` map, so the script reads that map instead of restating it. A version bump changes the list in one place — upstream — rather than drifting against a literal here.

Two things it reads rather than assumes:

- **The dialect URL** comes from `schema-base`'s `$defs.dialect.const`. That is the only place the spec states its own default dialect, and it moves on a different release cadence — 3.2's schema is dated 2025-11-23 while its dialect is 2025-09-17.
- **The `-or-reference` variant** is preferred wherever one exists. The plain defs set `unevaluatedProperties: false`, which rejects a fragment file that is itself a bare `{"$ref": "./other.json"}` — routine in a bundle. The variant branches on that and validates inline content identically otherwise. `path-item` has no variant because it declares `$ref` as a property already.

`components.schemas` is the one component with a real published URL, so it maps to the dialect rather than a pointer. Its `#/$defs/schema` is a deliberately empty stub — `{"$dynamicAnchor": "meta", "type": ["object", "boolean"]}` — because OpenAPI 3.1+ lets a document choose its own JSON Schema dialect via `jsonSchemaDialect`.

## Conventions

One wrapper per `components` key, named after the bundle subdirectory it validates. `DIRECTORIES` lists only the deviations: OpenAPI calls them schemas, the bundle has always called them `types`.

Unlike [scaffold-block](scaffold-block.md), this overwrites without asking. The wrappers are derived artefacts with nothing hand-written in them; refusing to overwrite would only make version bumps annoying.

Associations in `.vscode/settings.json` are edited by hand, for the same reason the block barrel is — it is a shared file, and a script that rewrote it would clobber unrelated settings for the sake of a few lines. The script prints the block to paste.

## Limits

`spec.json` uses `schema`, not `schema-base`. The latter would extend validation into schema objects written inline, but VS Code mis-resolves its internal `#/$defs/dialect` pointer against the dialect's base URI, and the resulting error *replaces* every real diagnostic in the file. Keeping schema objects in `types/` sidesteps this — they get full validation there.

Editor validation sees each file alone. It cannot tell that a `$ref` target is missing or is the wrong kind of object, and it stays silent on an empty file rather than flagging it. That needs a resolving linter:

```
npx @redocly/cli lint apps/cms/schema/bundle/spec.json
```

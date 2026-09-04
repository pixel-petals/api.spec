# Fragment layout

Where each fragment file goes. Everything described here sits under `defs/` in a version directory, so the one fetched file — `schema.json` — stays alone at the root and is never mixed in with derived ones. This stage sees only a normalized schema — it has no idea which OpenAPI version or JSON Schema draft produced it. See [normalize.md](../normalize/normalize.md) for what it is handed.

## The rule

A fragment file belongs somewhere only if a bundle author could point at that location and say the file goes there. Two places in an OpenAPI document qualify:

- **a key of the document root** — `servers`, `paths`, `webhooks`, `tags`, `security`, `info`, `components`, `externalDocs`
- **a key of the components map** — `schemas`, `responses`, `parameters`, and the rest

Both are addressable positions in a real document. Everything deeper is only reachable through a parent that is itself inline, so any directory chosen for it would be a guess dressed up as structure. Those go in `fragments/`, flat.

## Directory or file

A root key that holds a collection becomes a directory, because the files under it are named by the author: `defs/servers/server.json` validates each entry of the `servers` array. A root key holding a single object becomes a file, because there is only ever one: `defs/info.json`, `defs/paths.json`, `defs/externalDocs.json`.

## Defs with more than one home

The objects form a graph, not a tree. A Path Item is reachable from `webhooks`, from `paths`, from `components.pathItems` and from a callback, so no single location is *the* one.

One home is a location. Several is two guesses wearing a directory name, and picking a winner would make the tree assert something the document does not. So an object that lands in more than one home falls through to `fragments/` exactly like an object with none — `path-item` is written once, as `defs/fragments/pathItem.json`.

That is why 3.2 has no `defs/webhooks/` directory and no `defs/components/pathItems.json`, even though both are real positions in a document. Every fragment file corresponds to exactly one object, and every object to exactly one file.

## Naming

Object names arrive kebab-cased in 3.1+ and Pascal-cased in 3.0; files are camelCase either way. A leading run of capitals is treated as an acronym and lowercased whole, so 3.0's `XML` becomes `xml` and `HTTPSecurityScheme` becomes `httpSecurityScheme`.

`OAuthFlows` is the one name no rule gets right — it normalizes to `oAuthFlows` in 3.0, where 3.1+ spells the same object `oauth-flows` and so lands on `oauthFlows`. Nothing in the string says whether the leading `OA` is an acronym or the start of a word.

## Why the hierarchy holds across versions

Nothing here names a version. The root keys and component groups arrive already resolved from the normalizer, so the layout is the same code for Swagger 2.0 and OpenAPI 3.2. What changes between them is only *which* groups exist — 2.0 has no components map at all, and its reusable objects sit on the document root, where the root-key rule already reaches them.

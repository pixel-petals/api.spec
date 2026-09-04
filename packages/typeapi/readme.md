# @pixelpetals/typeapi

The TypeAPI specification, vendored with the TypeSchema document it extends, plus one standalone document per definition.

```sh
typeapi fetch 0.1.1
typeapi split 0.1.1
typeapi generate 0.1.1
typeapi list
```

## TypeAPI is not JSON Schema

This is the one package here that shares no pipeline with the others, because TypeAPI documents are **TypeSchema**, a different format. There is no `$schema`, no `$id`, and no `$ref`. A reference is a typed node:

```json
{ "security": { "type": "reference", "target": "Security" } }
```

and a cross-document one qualifies the target with an import alias, `"typeschema:PropertyType"`. Polymorphism is a `base` struct with a `discriminator` and a `mapping`, not a `oneOf`.

## Why fragments are whole documents

TypeSchema imports whole documents by alias and has no syntax for reaching a single definition inside another file. A pointer fragment would have nothing to point with.

So each fragment is a valid TypeSchema document in its own right: the definition, everything it transitively needs, and a `root` naming it. `SecurityApiKey` carries its `Security` parent; `Operation` carries `Argument` and `Response`. Only the import aliases an extract actually mentions are carried over, so a fragment never claims a dependency it does not have.

The root type is not written as a fragment — it is the vendored document itself.

## Hierarchy

Definitions land where the document puts them: a property of the root struct, or a branch of a discriminated base. `Security` is reached from `TypeAPI.security`, so it is a file, and its four mapped forms sit under it.

## Versions

TypeAPI publishes no per-version URL. Its repository carries no tags or releases, and TypeHub — where 0.1.0 and 0.1.1 are registered — exposes no public export endpoint. A fetch therefore reads the default branch, and the version argument names what that branch currently is rather than addressing a release. Re-fetching the same version can produce different content.

`imports/typeschema.{json,yaml}` is vendored alongside because TypeAPI inherits from it; without it every `typeschema:` target dangles. It tracks its own branch for the same reason, and the specification pins `typeschema@0.1.1` while the branch is at 0.1.2.

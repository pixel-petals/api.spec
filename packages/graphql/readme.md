# @pixelpetals/graphql

The GraphQL introspection schema, vendored per specification release, as SDL and as an introspection result, plus one fragment per introspection type.

```sh
graphql fetch 2025-09     # vendor schema/2025-09/schema.{graphql,json}
graphql split 2025-09     # generate the type fragments beside it
graphql generate 2025-09  # both, in one step
graphql list              # versions already vendored
```

`split` reads only what is on disk, so it works offline and always matches the vendored copy. `fetch` is the one command that touches the network.

## Versions

| version | upstream release | types |
| --- | --- | --- |
| draft | `main` | 8 |
| 2025-09 | September2025 | 8 |
| 2021-10 | October2021 | 8 |
| 2018-06 | June2018 | 8 |
| 2016-10 | October2016 | 8 |
| 2016-04 | April2016 | 8 |
| 2015-10 | October2015 | 7 |
| 2015-07 | July2015 | 7 |

Upstream names a release by the month it shipped — `October2021` — and serves it at `https://spec.graphql.org/October2021/` under a git tag of the same name on [graphql/graphql-spec](https://github.com/graphql/graphql-spec). That name neither sorts nor reads like a version anywhere else in this repo, so a release is vendored under its date instead and the tag is derived from it. Only the dated form is accepted: taking both spellings would vendor the same release twice, under two directory names, the first time anyone typed the other one.

`draft` is the exception and keeps its name. It is published beside the tagged releases but carries no tag and no date, because it is whatever `main` says today — so it is vendored from `main` and moves when the branch does.

The two oldest releases have seven types rather than eight: `__DirectiveLocation` did not exist yet, and `__Directive` described where a directive may appear with `onOperation`, `onFragment` and `onField` flags instead. 2015-07 is also the only release that keeps its sections at the repository root rather than under `spec/`.

## Layout

```text
schema/2025-09/
  schema.graphql              the introspection SDL, extracted verbatim
  schema.json                 the same schema as an introspection result
  defs/
    fragments/
      __schema.graphql    __schema.json
      __type.graphql      __type.json
      __typeKind.graphql  __typeKind.json
      __field.graphql     __field.json
      __inputValue.graphql        __inputValue.json
      __enumValue.graphql         __enumValue.json
      __directive.graphql         __directive.json
      __directiveLocation.graphql __directiveLocation.json
```

Everything under `defs/` is generated. Fragments sit flat: nothing in an introspection schema is addressable the way a `$ref` target is, so there is no document shape to mirror and no second home a fragment could belong in.

The `__` prefix stays in a file name — it is part of the type's name — and only the letter after it is lowered, which lands on the same camelCase the sibling packages use.

## Why this package is not like the others

`openapi`, `asyncapi`, `arazzo` and `mcp` all vendor a published JSON Schema document and split it on `$ref`. GraphQL publishes no schema document at all. The specification is prose Markdown, and the introspection type system exists in it as SDL inside a fenced code block in Section 4 — around 100 lines of it, next to worked examples in the same language.

So none of the shared pipeline applies. There is no JSON to fetch, no dialect to normalize, no `$ref` graph to walk, and no fragment that could usefully be a pointer wrapper. What this package shares with its siblings is the command surface and the directory layout, and the code says so: `bin/lib/graphql.cli.js` builds the same four commands with the same options that `utils/spec/spec.cli.js` builds, rather than calling it.

The steps are still `external source -> normalize -> process`:

```text
bin/
  cmd.js                    the entry point
  lib/graphql.spec.js       where a release lives, and what a version may be called
  lib/graphql.cli.js        commander wiring
  lib/graphql.commands.js   fetch, split and list
  lib/sdl/sdl.extract.js    Markdown -> the introspection SDL
  lib/sdl/sdl.types.js      SDL -> one definition per type
  lib/sdl/sdl.introspect.js SDL -> an introspection result
  lib/sdl/sdl.name.js       type name -> file name
  lib/sdl/sdl.files.js      where a version's files live
  lib/sdl/sdl.write.js      writing them
```

Extraction picks its code block by what the block declares, not by its info string: releases before 2018-06 tag no fence at all, and the ones that do tag examples and schemas alike. Splitting cuts each definition at its own AST boundaries, so a fragment is a definition the parser agreed to — and it is cut rather than reprinted, because printing drops the comments Section 4 uses to state the constraints SDL cannot, such as which `__Type` fields are non-null for which kind.

## Both formats

SDL is GraphQL's first-class format, and `schema.graphql` is the fetched artefact — extracted, otherwise verbatim, diffable against the specification's own prose.

`schema.json` is the same schema as an introspection result, shaped as `{ "__schema": … }`, which is what `buildClientSchema` reads and what client-side tooling generally expects. It is produced with the `graphql` package: build the SDL, then run `getIntrospectionQuery()` against it.

That is not quite the one-liner it sounds like, because every name in Section 4 is `__`-prefixed and graphql-js owns those names. The full reasoning is in [bin/lib/sdl/sdl.introspect.md](bin/lib/sdl/sdl.introspect.md); the short version is that the schema is built under unprefixed names and the prefix restored afterwards, without which the result silently describes graphql-js's introspection system instead of the vendored release.

Each type also gets its own `.json`: its entry in `__schema.types`, cut out of the same result, so a tool that reads introspection can be pointed at one type without slicing the document.

## Why there is no JSON Schema format

A third format was evaluated — a JSON Schema rendering, which would have let the vendored document run through the shared `normalizeDocument` and `writeFragments` the sibling packages use — and rejected. `graphql-2-json-schema@0.10.0` (the package behind `charlypoly/graphql-to-json-schema`) does produce a draft-06 document with a `definitions` library, and that document is accepted by the shared normalizer. The output is the problem.

The converter describes a schema as a set of *operations*, not as data. Every field becomes an object with `return` and `arguments`, whether or not it takes arguments, so `__Type.kind` comes out as:

```json
{ "type": "object", "properties": { "return": { "$ref": "#/definitions/__TypeKind" }, "arguments": { "type": "object", "properties": {} } } }
```

while the actual value of that field, in this package's own `schema.json`, is the string `"OBJECT"`. The generated JSON Schema does not validate the document it was derived from, and would not validate any GraphQL response either. A fragment pointing into it would be a wrapper around a description of the wrong thing.

Two further findings, either of which would be disqualifying on its own. The converter defaults to `ignoreInternals: true`, which drops every `__`-prefixed type — that is, this entire schema, leaving `definitions` holding `String` and `Boolean`. And `fromIntrospectionQuery` mutates the introspection object it is given, renaming the query root type to `Query` in place; getting all eight types into `definitions` at all meant handing it a copy with `queryType` nulled out, which is a schema this package would be misrepresenting.

The package is also unmaintained: 0.10.0, last published February 2023, `engines: node >= 8`. The `graphql-to-json-schema` package it forked from is worse — last published December 2017, against `graphql@^0.10.1`.

None of this is really the library's fault. It is built for user-defined schemas, and the `ignoreInternals` default is the library saying so. The introspection schema is exactly what it is designed to filter out.

## Limits

`schema.json` is not a transcript of a real server's response, and two things in it are edited away because they would describe the toolchain rather than the release:

- graphql-js adds its own meta-types to every schema it builds. Those are dropped, leaving only what Section 4 declares.
- the built-in directives — `@include`, `@skip`, `@deprecated`, `@specifiedBy`, `@oneOf` — belong to Section 3, so `directives` is empty rather than a list of whatever the dependency happens to define.

`String` and `Boolean` stay, because the section's own fields reference them and a result without them would not resolve. They are why `schema.json` reports two more types than `schema.graphql` declares.

The introspection schema also has no query root of its own — it describes a meta-system, not a service — so one is supplied to make the schema introspectable at all, and `queryType` reads `__Schema`. That is the type a `__schema` meta-field returns, so it is a fair answer, but it is an answer this package chose rather than one the specification states.

Finally, this vendors Section 4 alone. The type system a service actually defines is Section 3, and the grammar is Section 8; neither is here, and neither has a machine-readable form to vendor.

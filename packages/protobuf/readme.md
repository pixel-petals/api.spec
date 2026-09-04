# @pixelpetals/protobuf

Protobuf's self-describing schema, vendored per release, plus one JSON fragment for every declaration it makes at the top level.

```sh
protobuf fetch 36.1     # vendor schema/36.1/schema.proto and the well-known types
protobuf split 36.1     # parse it into schema.json and the fragments
protobuf generate 36.1  # both, in one step
protobuf list           # releases already vendored
```

`split` reads only what is on disk, so it works offline and always matches the vendored copy. `fetch` is the one command that touches the network.

## Versions

| release | messages | enums | fragments |
| --- | --- | --- | --- |
| 36.1 | 23 top-level, 12 nested | 2 top-level | 25 |

A version is a protobuf release tag without its `v`, so `36.1` addresses `v36.1` in the compiler's repository. Anything that does not start with a digit is passed through as a git ref, which is how `protobuf fetch main` vendors a schema change that has not been tagged yet.

One release is vendored — the newest at the time of writing. `protobuf fetch 32.0` replaces it with any other; the tags are listed under [releases](https://github.com/protocolbuffers/protobuf/releases).

## Layout

```text
schema/36.1/
  schema.proto              descriptor.proto, verbatim
  schema.json               the same schema, parsed
  defs/
    type.proto              runtime reflection
    any.proto  api.proto  duration.proto  empty.proto  field_mask.proto
    source_context.proto  struct.proto  timestamp.proto  wrappers.proto
    fragments/
      descriptorProto.json  edition.json  enumDescriptorProto.json
      enumOptions.json  enumValueDescriptorProto.json  enumValueOptions.json
      extensionRangeOptions.json  featureSet.json  featureSetDefaults.json
      fieldDescriptorProto.json  fieldOptions.json  fileDescriptorProto.json
      fileDescriptorSet.json  fileOptions.json  generatedCodeInfo.json
      messageOptions.json  methodDescriptorProto.json  methodOptions.json
      oneofDescriptorProto.json  oneofOptions.json  serviceDescriptorProto.json
      serviceOptions.json  sourceCodeInfo.json  symbolVisibility.json
      uninterpretedOption.json
```

`schema.proto` is the only fetched file that sits at the version root. The `.proto` files under `defs/` are fetched too, and everything else is generated.

The vendored `.proto` files keep their upstream basenames. A `.proto` names itself in the `import` statements of every file that uses it — `import "google/protobuf/any.proto"` — so renaming one to camelCase, the way a fragment is named, would break the imports it exists to satisfy.

## Why this package has its own pipeline

Every other specification in this repo publishes a JSON Schema, so the shared tooling can fetch a document, normalize it against its draft, and derive fragments that `$ref` back into it. Protobuf publishes none. Its schema is `descriptor.proto`, a proto2 source file in the compiler's own repository, and the language it is written in is protobuf IDL rather than JSON.

That changes what each stage means, not what the stages are. `utils/schema` and `utils/fragments` do not apply, because there is no draft to normalize and no `$ref` to point with. Everything that is not about JSON Schema — where a version lives, how a document is written, how names become file names, how the CLI reads — is still the shared code.

The parse *is* the normalization here. `protobufjs` is the reference JavaScript implementation of the language, so `schema.json` is the compiler's reading of the file rather than a translation of it, and `protobuf.Root.fromJSON` reads it back into the same object graph.

## Why there are no `.proto` fragments

A protobuf message is not a compilation unit. It inherits its file's `syntax`, `package` and `option` headers, and it names its neighbours by bare identifier — `FieldDescriptorProto` inside `DescriptorProto` resolves through the enclosing package, not through anything written in the message itself. Cut one message into a file of its own and the result either fails to compile for want of the headers, or compiles into a *different* type in a different package. Either way the file would be a lie about the schema.

So the split emits JSON only. The parsed JSON has no such problem: it describes a declaration rather than translating one, and each node already carries its resolved name, its field numbers, its types and its documentation. A single declaration lifted out of it is exactly as true as the whole document. That is the honest limit of splitting protobuf, and the reason a `defs/fragments/*.proto` you might expect from the sibling packages is absent rather than broken.

## What a fragment holds

```json
{
  "name": "FileDescriptorProto",
  "fullName": "google.protobuf.FileDescriptorProto",
  "kind": "message",
  "pointer": "../../schema.json#/nested/google/nested/protobuf/nested/FileDescriptorProto",
  "descriptor": {
    "edition": "proto2",
    "fields": {
      "name": { "type": "string", "id": 1, "comment": "file name, relative to root of source tree" }
    }
  }
}
```

`descriptor` is the declaration's own JSON, comments included — the schema's `//` comments are the only prose describing what each field means, and a fragment without them is unreadable next to the IDL. `pointer` locates the identical node in `schema.json`, which is the cross-reference the sibling packages get from a `$ref`.

Both messages and enums are fragmented. Either can be named from another file, so a consumer looking one up should find a file rather than a gap. Nested declarations are not: a nested message is reachable only through its parent, so it has no address of its own and travels inside its parent's fragment — the same rule the sibling packages apply to inline objects.

## Formats

Two, and only two. `.proto` is protobuf's first-class format and is written verbatim, byte for byte as published. JSON is the one other rendering with a defined meaning, because `protobufjs` round-trips it. There is no YAML twin here as there is in the sibling packages: nothing in the protobuf toolchain reads a YAML descriptor, so it would be a file format with no reader.

## Limits

`schema.json` describes the schema; it does not validate a `.proto` file, and nothing in this package does. Protobuf has no validator separate from its compiler — `protoc` compiling a file against an include root is the check, and that is a toolchain step rather than something a vendored schema can perform.

The well-known types under `defs/` are vendored for reference and are not wired into an import path. `import "google/protobuf/any.proto"` will not resolve against this directory as it stands, because that import spells out a nesting under an include root and the files sit flat.

Generated files are overwritten without asking. Nothing in them is hand-written, and refusing to overwrite would only make version bumps annoying.

## Layout of the tool

`external source -> normalize -> process`, one directory per stage:

```text
bin/
  cmd.js                   the entry point
  lib/protobuf.spec.js     what protobuf publishes, and where a release lives
  lib/protobuf.cli.js      commander wiring
  lib/protobuf.commands.js fetch, split and list
  lib/protobuf.report.js   terminal output
  lib/source/              fetching, locating and reading a vendored release
  lib/proto/               parsing IDL, and the declarations that come out
```

The CLI is wired here rather than built by `utils/spec/spec.cli`, which is driven by a descriptor whose every stage assumes a JSON Schema document. The commands, their arguments and their output are still the siblings' — same four names, same `-q, --quiet`, same summary — so the package behaves like one from the outside.

## Versions

The repository publishes 59 `vMAJOR.MINOR` releases. Vendored here is the latest patch of each major — 36.1, 35.1, 34.2, 33.6, 32.1, 31.1, 30.2, 29.6, 28.3, 27.5, 26.1, 25.9, 24.4, 23.4 — because `descriptor.proto` changes across majors and rarely within one: the fragment count moves from 21 at 23.4 to 25 at 36.1, but not between patches of the same major.

Any other release is one command away, and `protobuf releases` lists them all against what is on disk.

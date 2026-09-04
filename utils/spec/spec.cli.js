/**
 * Builds a specification CLI from a descriptor.
 *
 * Every package gets the same four commands over its own schema tree, so the
 * only thing that varies between them is where a release lives.
 */

import { Command } from 'commander'

import { fetchCommand, listCommand, splitCommand } from '#spec/spec.commands'

/** @import { SpecDescriptor } from '#spec/spec.descriptor' */

const QUIET = [ '-q, --quiet', 'print the summary only' ]

/** A dated specification addresses a release by version and date, e.g. OpenAPI. */
function releaseArgs(spec, command) {
  command.argument('<version>', `version, e.g. ${spec.versionHint ?? '3.2'}`)

  if (spec.dated) command.argument('<date>', `the dated release, e.g. ${spec.dateHint ?? '2025-11-23'}`)

  return command
}

/** @param {SpecDescriptor} spec */
export function createCli(spec) {
  const program = new Command()
  const fetch = fetchCommand(spec)
  const split = splitCommand(spec)

  program.name(spec.name).description(spec.description)

  releaseArgs(spec, program.command('fetch'))
    .description('download a release and vendor it')
    .action(fetch)

  program.command('split')
    .description('generate fragment schemas from a vendored document')
    .argument('<version>', `version, e.g. ${spec.versionHint ?? '3.2'}`)
    .option(...QUIET)
    .action(split)

  releaseArgs(spec, program.command('generate'))
    .description('fetch then split, in one step')
    .option(...QUIET)
    .action(async (...args) => {
      const options = args.pop()

      await fetch(...args)
      split(args[ 0 ], options)
    })

  program.command('list')
    .description('the versions already vendored')
    .action(listCommand(spec))

  return program
}

/** Parses and reports a failure as a message rather than a stack. */
export function run(spec) {
  return createCli(spec).parseAsync().catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

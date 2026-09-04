/**
 * The specification CLI, wired locally.
 *
 * Same four commands, arguments and options as the shared builder — the shared
 * one is driven by a descriptor whose every stage assumes a JSON Schema
 * document, and protobuf has none to give it.
 */

import { Command } from 'commander'

import { fetchCommand, listCommand, splitCommand } from '#lib/protobuf.commands'
import { protobuf } from '#lib/protobuf.spec'

const QUIET = [ '-q, --quiet', 'print the summary only' ]

const VERSION = [ '<version>', `version, e.g. ${protobuf.versionHint}` ]

export function createCli() {
  const program = new Command()

  program.name(protobuf.name).description(protobuf.description)

  program.command('fetch')
    .description('download a release and vendor it')
    .argument(...VERSION)
    .action(fetchCommand)

  program.command('split')
    .description('generate fragments from a vendored schema')
    .argument(...VERSION)
    .option(...QUIET)
    .action(splitCommand)

  program.command('generate')
    .description('fetch then split, in one step')
    .argument(...VERSION)
    .option(...QUIET)
    .action(async (version, options) => {
      await fetchCommand(version)
      splitCommand(version, options)
    })

  program.command('list')
    .description('the versions already vendored')
    .action(listCommand)

  return program
}

/** Parses and reports a failure as a message rather than a stack. */
export function run() {
  return createCli().parseAsync().catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

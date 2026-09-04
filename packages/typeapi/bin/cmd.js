#!/usr/bin/env node

/**
 * Populates the vendored TypeAPI specification tree.
 *
 *   schema/<version>/schema.{json,yaml}            the specification
 *   schema/<version>/imports/typeschema.{json,yaml} the document it extends
 *   schema/<version>/defs/<group>/<name>.{json,yaml} one per definition
 *
 * See readme.md.
 */

import { Command } from 'commander'

import { releasesCommand } from 'utils/spec/spec.releases'

import { fetchCommand, listCommand, splitCommand } from '#lib/typeapi.commands'
import { typeapi } from '#lib/typeapi.spec'

/** @type {[string, string]} */
const VERSION = [ '<version>', `version, e.g. ${typeapi.versionHint}` ]
/** @type {[string, string]} */
const QUIET = [ '-q, --quiet', 'print the summary only' ]

const program = new Command()

program.name(typeapi.name).description(typeapi.description)

program.command('fetch')
  .description('download the specification and vendor it')
  .argument(...VERSION)
  .action(fetchCommand)

program.command('split')
  .description('generate TypeSchema documents from a vendored specification')
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

program.command('releases')
  .description('the versions upstream publishes, and which are vendored')
  .action(releasesCommand(typeapi))

program.parseAsync().catch(error => {
  console.error(error.message)
  process.exitCode = 1
})

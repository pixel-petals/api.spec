#!/usr/bin/env node

/**
 * Populates the vendored OpenAPI schema tree.
 *
 *   schema/<version>/schema.json                the published schema
 *   schema/<version>/<group>/<fragment>.json    one per $ref-able object
 *
 * See readme.md.
 */

import { Command } from 'commander'

import { fetchCommand } from './commands/commands.fetch.js'
import { listCommand } from './commands/commands.list.js'
import { splitCommand } from './commands/commands.split.js'
import { SCHEMA_FILE } from './lib/source/source.paths.js'

const VERSION_ARG = [ '<version>', 'OpenAPI minor, e.g. 3.2' ]
const DATE_ARG = [ '<date>', 'the dated schema release, e.g. 2025-11-23' ]
const QUIET = [ '-q, --quiet', 'print the summary only' ]

const program = new Command()

program
  .name('openapi')
  .description('Vendor the OpenAPI schema and split it into $ref-able fragments')

program
  .command('fetch')
  .description(`download a dated release to schema/<version>/${SCHEMA_FILE}`)
  .argument(...VERSION_ARG)
  .argument(...DATE_ARG)
  .action(fetchCommand)

program
  .command('split')
  .description('generate fragment schemas from a vendored schema')
  .argument(...VERSION_ARG)
  .option(...QUIET)
  .action(splitCommand)

program
  .command('generate')
  .description('fetch then split, in one step')
  .argument(...VERSION_ARG)
  .argument(...DATE_ARG)
  .option(...QUIET)
  .action(async (version, date, options) => {
    await fetchCommand(version, date)
    splitCommand(version, options)
  })

program
  .command('list')
  .description('the versions already vendored')
  .action(listCommand)

program.parseAsync().catch(error => {
  console.error(error.message)
  process.exitCode = 1
})

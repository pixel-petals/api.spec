/** `openapi list` — the versions already vendored. */

import { versions } from '../lib/source/source.paths.js'

export function listCommand() {
  const found = versions()

  if (!found.length) return console.log('nothing vendored yet — run `openapi fetch <version> <date>`')

  for (const version of found) console.log(`  ${version}`)
}

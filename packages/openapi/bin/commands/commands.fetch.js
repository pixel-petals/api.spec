/** `openapi fetch` — vendor a dated release. */

import { fetchSchema } from '../lib/source/source.fetch.js'

export async function fetchCommand(version, date) {
  const { source, file } = await fetchSchema(version, date)

  console.log(`fetched ${source}`)
  console.log(`  -> schema/${file}`)
}

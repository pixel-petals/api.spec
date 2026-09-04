/** Fetching a specification document and vendoring it. */

import { documentStem } from '#source/source.paths'
import { writeDocument } from '#serialize/serialize.write'

export async function fetchJson(url) {
  const response = await fetch(url)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${url}`)

  return response.json()
}

/**
 * Downloads a document and writes it into `<root>/<version>/schema.<format>`.
 *
 * The source is JSON in every case we vendor; the formats are what we publish
 * it as, so a YAML toolchain never has to convert on the way in.
 *
 * @returns {Promise<{document: unknown, url: string, files: string[]}>}
 */
export async function vendorDocument({ root, version, url, formats }) {
  const document = await fetchJson(url)
  const files = writeDocument(documentStem(root, version), document, formats)

  return { document, url, files }
}

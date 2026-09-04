/** Terminal output, in the shape every specification CLI in the repo prints. */

import { relative } from 'node:path'

function fromRoot(file, root) {
  return relative(root, file).replaceAll('\\', '/')
}

export function reportVendored(url, files, root) {
  console.log(`fetched ${url}`)

  for (const file of files) console.log(`  -> ${fromRoot(file, root)}`)
}

/** One line per fragment: where it landed, and what it describes. */
export function reportFragments(written, root) {
  const paths = written.map(fragment => fromRoot(fragment.file, root))
  const width = Math.max(...paths.map(path => path.length))

  written.forEach((fragment, index) => {
    console.log(`  ${paths[ index ].padEnd(width)}  ${fragment.kind} ${fragment.name}`)
  })
}

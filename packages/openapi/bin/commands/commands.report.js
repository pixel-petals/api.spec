/** Terminal output for the commands. */

/** The pointer's tail is what differs between fragments; the path prefix is noise. */
function short(pointer) {
  return pointer.replace(/^.*#/, '#')
}

export function reportFragments(written) {
  const width = Math.max(...written.map(fragment => fragment.file.length))

  for (const fragment of written) {
    console.log(`  ${fragment.file.padEnd(width)}  ${fragment.pointers.map(short).join('  |  ')}`)
  }
}

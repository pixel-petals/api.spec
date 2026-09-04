/**
 * The formats a document can be written as.
 *
 * A format is a file extension paired with the function that renders to it,
 * so callers name a format and never a serializer. See serialize.md.
 */

import { stringify as yaml } from 'yaml'

/** Two-space indent, trailing newline — the shape a formatter would leave. */
function json(value) {
  return `${JSON.stringify(value, null, 2)}\n`
}

/**
 * `lineWidth: 0` disables folding.
 *
 * The default wraps long scalars across lines, which mangles the URLs that
 * make up most of a pointer document — legal YAML, unreadable diffs.
 */
function yml(value) {
  return yaml(value, { lineWidth: 0 })
}

/** @type {Record<string, (value: unknown) => string>} */
export const FORMATS = {
  json,
  yaml: yml,
}

export const DEFAULT_FORMATS = [ 'json', 'yaml' ]

/** Rejects an unknown format by name rather than writing an empty file. */
export function serializer(format) {
  const render = FORMATS[ format ]

  if (!render) throw new Error(`unknown format "${format}" — expected one of ${Object.keys(FORMATS).join(', ')}`)

  return render
}

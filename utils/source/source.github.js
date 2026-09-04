/**
 * The GitHub endpoints a schema registry is reached through.
 *
 * Four of the specifications publish their releases as repository tags or
 * directory listings rather than through a registry of their own, so this is
 * where "what versions exist" comes from for them.
 */

const API = 'https://api.github.com/repos'

/** GitHub rejects an unidentified client, so every request names one. */
async function api(path) {
  const response = await fetch(`${API}/${path}`, { headers: { 'User-Agent': 'pixelpetals-api-spec' } })

  if (!response.ok) throw new Error(`${response.status} ${response.statusText} — ${path}`)

  return response.json()
}

/**
 * Release tags, newest first as GitHub returns them.
 *
 * @returns {Promise<string[]>}
 */
export async function tags(repo, { per_page = 100 } = {}) {
  /** @type {{name: string}[]} */
  const found = await api(`${repo}/tags?per_page=${per_page}`)

  return found.map(tag => tag.name)
}

/**
 * The entries of one directory, filtered to directories or to files.
 *
 * @param {string} repo
 * @param {string} path
 * @param {{type?: 'dir' | 'file'}} [options]
 * @returns {Promise<string[]>}
 */
export async function contents(repo, path, { type } = {}) {
  /** @type {{name: string, type: string}[]} */
  const entries = await api(`${repo}/contents/${path}`)

  return entries.filter(entry => !type || entry.type === type).map(entry => entry.name)
}

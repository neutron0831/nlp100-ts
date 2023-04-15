import { ex26 } from './ex26'

/**
 * ### 27. Remove internal links
 * In addition to the process of the problem 26, remove internal links from the values. See [Help:Cheatsheet](https://en.wikipedia.org/wiki/Help:Cheatsheet).
 *
 * @returns {Promise<{ [name: string]: string }>}
 */
async function ex27(): Promise<{ [name: string]: string }> {
  const infobox = await ex26()
  for (const [name, value] of Object.entries(infobox)) {
    infobox[name] = value.replaceAll(/\[\[([^|\]]*?)(\|.*?)?\]\]/g, '$1')
  }

  return infobox
}

export { ex27 }

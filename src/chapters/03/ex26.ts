import { ex25 } from './ex25'

/**
 * ### 26. Remove emphasis markups
 * In addition to the process of the problem 25, remove emphasis MediaWiki markups from the values. See [Help:Cheatsheet](https://en.wikipedia.org/wiki/Help:Cheatsheet).
 *
 * @returns {Promise<{ [name: string]: string }>}
 */
async function ex26(): Promise<{ [name: string]: string }> {
  const infobox = await ex25()
  for (const [name, value] of Object.entries(infobox)) {
    infobox[name] = value.replaceAll(/'{2,5}/g, '')
  }

  return infobox
}

export { ex26 }

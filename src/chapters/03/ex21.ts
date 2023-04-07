import { ex20 } from './ex20'
import { map } from 'lodash'

/**
 * ### 21. Lines with category names
 * Extract lines that define the categories of the article.
 *
 * @returns {Promise<string[]>}
 */
async function ex21(): Promise<string[]> {
  const { text } = await ex20()
  const categories = map([...text.matchAll(/(\[\[Category:.*\]\])/g)], 1)

  return categories
}

export { ex21 }

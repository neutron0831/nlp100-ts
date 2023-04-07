import { ex21 } from './ex21'
import { map } from 'lodash'

/**
 * ### 22. Category names
 * Extract the category names of the article.
 *
 * @returns {Promise<string[]>}
 */
async function ex22(): Promise<string[]> {
  const categories = await ex21()
  const categoryNames = map(
    [...categories.join('\n').matchAll(/\[\[Category:(.*)\]\]/g)],
    1,
  )

  return categoryNames
}

export { ex22 }

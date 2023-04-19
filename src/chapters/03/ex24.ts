import { ex20 } from './ex20'
import { map } from 'lodash'

/**
 * ### 24. Media references
 * Extract references to media files linked from the article.
 *
 * @returns {Promise<string[]>}
 */
async function ex24(): Promise<string[]> {
  const { text } = await ex20()
  const mediaFiles = map([...text.matchAll(/\[\[File:([^|\]]*)(\||\])/g)], 1)

  return mediaFiles
}

export { ex24 }

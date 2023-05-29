import { ex30 } from './ex30'
import type { Morpheme } from './ex30'
import { map, uniq } from 'lodash'

/**
 * ### 31. Verbs
 * Extract surface forms of all verbs appearing in the text.
 *
 * @returns {Promise<string[]>}
 */
async function ex31(): Promise<string[]> {
  const sentences: Morpheme[][] = await ex30()
  const verbs = uniq(
    sentences
      .map((sentence) =>
        map(
          sentence.filter((morpheme) => morpheme.pos.startsWith('VB')),
          'text',
        ),
      )
      .flat(),
  ).sort()

  return verbs
}

export { ex31 }

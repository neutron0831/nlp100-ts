import { ex30 } from './ex30'
import type { Morpheme } from './ex30'
import { inRange, map, uniq } from 'lodash'

/**
 * ### 33. A of B
 * Extract noun phrases in the form of "A of B", where A and B are nouns.
 *
 * @returns {Promise<string[]>}
 */
async function ex33(): Promise<string[]> {
  const sentences: Morpheme[][] = await ex30()
  const isAofB = (morphemes: Morpheme[]): boolean =>
    morphemes[1].lemma === 'of' &&
    morphemes[1].pos === 'IN' &&
    [0, 2].every((i) => morphemes[i].pos.startsWith('NN'))
  const nounPhrases: string[] = []

  sentences.forEach((sentence) =>
    sentence.forEach((_, i) => {
      if (inRange(i, 1, sentence.length - 1)) {
        const morphemes = sentence.slice(i - 1, i + 2)
        if (isAofB(morphemes))
          nounPhrases.push(map(morphemes, 'text').join(' '))
      }
    }),
  )

  return uniq(nounPhrases).sort()
}

export { ex33 }

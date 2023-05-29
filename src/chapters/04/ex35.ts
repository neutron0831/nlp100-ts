import { ex30 } from './ex30'
import type { Morpheme } from './ex30'
import { findIndex, orderBy } from 'lodash'

/**
 *
 * @interface Frequency
 * @property {string} word - Word
 * @property {string} frequency  - Frequency of it occurrence
 */
export interface Frequency {
  word: string
  frequency: number
}

/**
 * ### 35. Frequency of words
 * Obtain the list of words and frequencies of their occurrences sorted by descending order of frequency.
 *
 * @returns {Promise<Frequency[]>}
 */
async function ex35(): Promise<Frequency[]> {
  const sentences: Morpheme[][] = await ex30()
  const frequencies: Frequency[] = []

  sentences.forEach((sentence) =>
    sentence.forEach((morpheme) => {
      const { lemma } = morpheme
      const index = findIndex(frequencies, ['word', lemma])
      if (index !== -1) {
        frequencies[index].frequency++
      } else {
        frequencies.push({ word: lemma, frequency: 1 })
      }
    }),
  )

  return orderBy(frequencies, ['frequency', 'word'], ['desc', 'asc'])
}

export { ex35 }

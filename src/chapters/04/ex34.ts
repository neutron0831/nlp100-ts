import { ex30, type Morpheme } from './ex30'

/**
 * ### 34. A B
 * Extract the longest noun phrase consisting of consecutive nouns.
 *
 * @returns {Promise<string>}
 */
async function ex34(): Promise<string> {
  const sentences: Morpheme[][] = await ex30()
  const nounPhrase: string[] = []

  sentences.forEach((sentence) => {
    for (let i = 0; i < sentence.length; i++) {
      let start = i
      while (i < sentence.length && sentence[i++].pos.startsWith('NN'));
      if (i - start > nounPhrase.length) {
        nounPhrase.length = 0
        while (start < i) {
          nounPhrase.push(sentence[start++].text)
        }
      }
    }
  })

  return nounPhrase.join(' ')
}

export { ex34 }

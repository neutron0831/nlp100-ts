/**
 * ### 05. n-gram
 * Implement a function that obtains n-grams from a given sequence object (e.g., string and list). Use this function to obtain word bi-grams and letter bi-grams from the sentence "I am an NLPer".
 *
 * @param {string} sentence
 * @returns {string[][][]}
 */
function ex05(sentence: string = 'I am an NLPer.'): string[][][] {
  const wordBigrams = ngram(
    2,
    sentence.replaceAll(/[!"(),\-.:;?]/g, '').split(' '),
  )
  const letterBigrams = ngram(
    2,
    sentence.replaceAll(/[!"(),\-.:;?]/g, '').split(''),
  )

  return [wordBigrams, letterBigrams]
}

/**
 * Returns a contiguous sequence of n items from a given text.
 * @param {number} n
 * @param {string[]} text
 * @returns {string[][]}
 */
function ngram(n: number, text: string[]): string[][] {
  return text.slice(0, 1 - n).map((_, i) => text.slice(i, i + n))
}

export { ex05, ngram }

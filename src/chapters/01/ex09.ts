import { every, shuffle } from 'lodash'

/**
 * ### 09. Typoglycemia
 * Write a program with the specification:
 * - Receive a word sequence separated by space
 * - For each word in the sequence:
 *   - If the word is no longer than four letters, keep the word unchanged
 *   - Otherwise,
 *     - Keep the first and last letters unchanged
 *     - Shuffle other letters in other positions (in the middle of the word)
 * Observe the result by giving a sentence, e.g., "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind".
 *
 * @param {string} sentence
 * @returns {string}
 */
function ex09(
  sentence: string = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind",
): string {
  return typoglycemialize(sentence)
}

/**
 * Converts a given string with the specification:
 * - Receive a word sequence separated by space
 * - For each word in the sequence:
 *   - If the word is no longer than four letters, keep the word unchanged
 *   - Otherwise,
 *     - Keep the first and last letters unchanged
 *     - Shuffle other letters in other positions (in the middle of the word)
 * @param {string} text
 * @returns {string}
 */
function typoglycemialize(text: string): string {
  return text
    .split(' ')
    .map((word) => {
      let middle = word.slice(1, -1)
      if (word.length < 4 || every(middle, (letter) => letter === middle[0])) {
        return word
      } else {
        const [first, last] = [word[0], word.slice(-1)]
        let shuffled = ''
        do {
          middle = shuffle(middle).join('')
          shuffled = first + middle + last
        } while (shuffled === word)
        return shuffled
      }
    })
    .join(' ')
}

export { ex09 }

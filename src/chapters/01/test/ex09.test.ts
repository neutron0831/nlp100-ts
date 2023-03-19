import { ex09 } from '../ex09'

describe('09. Typoglycemia', () => {
  const sentence: string =
    "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind"
  const words: string[] = sentence.split(' ')
  const shuffledWords = ex09().split(' ')

  describe('words no longer than four letters are kept unchanged', () => {
    const noLongerThanFour = shuffledWords.flatMap((word, i) =>
      word.length < 4 ? [[words[i], word]] : [],
    )
    it.each(noLongerThanFour)('%s -> %s (unchanged)', (expected, word) => {
      expect(word).toBe(expected)
    })
  })

  describe('words four letters or longer are changed', () => {
    const fourOrLonger = shuffledWords.flatMap((word, i) =>
      word.length >= 4 ? [[words[i], word]] : [],
    )

    describe('the first and last letters are kept unchanged', () => {
      it.each(fourOrLonger)('%s -> %s', (expected, word) => {
        expect([word[0], word.slice(-1)]).toEqual([
          expected[0],
          expected.slice(-1),
        ])
      })
    })

    describe('the other letters are shuffled in other positions', () => {
      it.each(fourOrLonger)('%s -> %s', (expected, word) => {
        expect(word.slice(1, -1)).not.toBe(expected.slice(1, -1))
      })
    })
  })
})

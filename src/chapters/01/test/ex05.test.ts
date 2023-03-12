import { ex05 } from '../ex05'

describe('05. n-gram', () => {
  const [word_bigram, letter_bigram] = ex05()

  it('word bi-grams from the sentence "I am an NLPer."', () => {
    expect(word_bigram).toEqual([
      ['I', 'am'],
      ['am', 'an'],
      ['an', 'NLPer'],
    ])
  })

  it('letter bi-grams from the sentence "I am an NLPer."', () => {
    expect(letter_bigram).toEqual([
      ['I', ' '],
      [' ', 'a'],
      ['a', 'm'],
      ['m', ' '],
      [' ', 'a'],
      ['a', 'n'],
      ['n', ' '],
      [' ', 'N'],
      ['N', 'L'],
      ['L', 'P'],
      ['P', 'e'],
      ['e', 'r'],
    ])
  })
})

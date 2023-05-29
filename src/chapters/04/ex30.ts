// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import aliceTextConll from '@/assets/alice.txt.conll?raw'
import { parse, ParseResult } from 'papaparse'

/**
 *
 * @interface Morpheme
 * @property {string} text - Surface form
 * @property {string} lemma  - Base form
 * @property {string} pos  - Part-of-speech tag
 */
export interface Morpheme {
  text: string
  lemma: string
  pos: string
}

/**
 * ### 30. Reading the result
 * Implement a program that reads the result of part-of-speech tagging. Here, represent a sentence as a list of mapping objects, each of which associates a surface form, lemma (base form), part-of-speech tag with the keys `text`, `lemma`, `pos`. Use this representation in the rest of the problems.
 *
 * @returns {Promise<Morpheme[][]>}
 */
async function ex30(): Promise<Morpheme[][]> {
  const { data: morphemes }: ParseResult<Morpheme & { index: number }> = parse(
    aliceTextConll,
    {
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) =>
        `${['index', 'text', 'lemma', 'pos'].join('\t')}\n` + // header
        chunk
          .split('\n')
          // '1	ALICE	ALICE	NNP	_	_	_' → '1	ALICE	ALICE	NNP'
          .map((row) => row.split('\t').slice(0, -3).join('\t'))
          .join('\n'),
      transform: (value, header) =>
        header === 'index' ? Number(value) - 1 : value,
    },
  )

  const sentences: Morpheme[][] = []
  let i = -1
  while (morphemes.length > 0) {
    sentences[++i] = []
    do {
      const { index, text, lemma, pos } = morphemes.shift()!
      sentences[i][index] = { text, lemma, pos }
    } while (morphemes[0] && morphemes[0].index > 0)
  }

  return sentences
}

export { ex30 }

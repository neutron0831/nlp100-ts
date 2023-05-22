// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex30 } from '../ex30'
import type { Morpheme } from '../ex30'

describe('30. Reading the result', () => {
  it('a list of mapping objects, each of which associates a surface form, lemma (base form), part-of-speech tag', async () => {
    /**
     * Execute the command separately for each key since it cannot be executed at once due to the buffer limit of the standard output.
     * $ sed -E 's/[0-9]+\t(.+)\t(.+)\t(.+)(\t_){3}/{"text": "\1", "lemma": "\2", "pos": "\3"},/g' alice.txt.conll'
     */
    const keys = ['text', 'lemma', 'pos']
    const values = keys.map((key, i) =>
      JSON.parse(
        (
          '[[' +
          execSync(
            `sed -E 's/[0-9]+\\t(.+)\\t(.+)\\t(.+)(\\t_){3}/{"${key}": "\\${
              i + 1
            }"},/g' .${aliceTextConll}`,
          )
            .toString()
            .trim()
            .replaceAll('\n\n', '],[') +
          ']]'
        ).replaceAll(',]', ']'),
      ),
    )
    const sentences: Morpheme[][] = values[0].map((sentence: any, i: number) =>
      sentence.map((_: any, j: number) =>
        Object.fromEntries(keys.map((key, k) => [key, values[k][i][j][key]])),
      ),
    )

    expect(await ex30()).toEqual(sentences)
  })
})

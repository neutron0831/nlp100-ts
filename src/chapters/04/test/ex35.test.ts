// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex35 } from '../ex35'

describe('35. Frequency of words', () => {
  describe('the list of words and frequencies of their occurrences', async () => {
    const frequencies = Object.fromEntries(
      execSync(
        // $ sed '/^$/d' alice.txt.conll | cut -f 3 | sort | uniq -c | sort -k 1,1nr -k 2 | awk '{print $2":"$1","}'
        `sed '/^$/d' .${aliceTextConll} | cut -f 3 | sort | uniq -c | sort -k 1,1nr -k 2 | awk '{print $2"|"$1}'`,
      )
        .toString()
        .trim()
        .split('\n')
        .map((line) => line.split('|').map((l, i) => (i ? Number(l) : l))),
    )

    it.each(
      (await ex35()).map((word) => ({
        ...word,
        expected: frequencies[word.word],
      })),
    )('frequency of $word is $expected', ({ frequency, expected }) => {
      expect(frequency).toBe(expected)
    })
  })
})

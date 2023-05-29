// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex36 } from '../ex36'

describe('36. Top-ten frequent words', () => {
  describe('the top-ten frequent words and their frequencies', async () => {
    const frequencies = Object.fromEntries(
      execSync(
        // $ cut -f 3 alice.txt.conll | sed 's/['\''`,.]//g; /^$/d' | sort | uniq -c | sort -k 1,1nr -k 2 | awk '{print $2"|"$1}' | head -n 10
        `cut -f 3 .${aliceTextConll} | sed 's/['\\''\`,.]//g; /^$/d' | sort | uniq -c | sort -k 1,1nr -k 2 | awk '{print $2"|"$1}' | head -n 10`,
      )
        .toString()
        .trim()
        .split('\n')
        .map((line) => line.split('|').map((l, i) => (i ? Number(l) : l))),
    )

    it.each(
      (await ex36())!.map((word, i) => ({
        nth: i + 1,
        ...word,
        expected: frequencies[word.word],
      })),
    )('$nth $word: $expected', ({ frequency, expected }) => {
      expect(frequency).toBe(expected)
    })
  })
})

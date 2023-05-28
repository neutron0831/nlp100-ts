// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex38 } from '../ex38'

describe('38. Histogram', () => {
  describe('a histogram of word frequency', async () => {
    const histogram = Object.fromEntries(
      execSync(
        // $ cut -f 3 alice.txt.conll | sed '/^$/d' | sort | uniq -c | awk '{print $1}' | sort -n | uniq -c | sort -k 2n | awk '{print $2":"$1}'
        `cut -f 3 .${aliceTextConll} | sed '/^$/d' | sort | uniq -c | awk '{print $1}' | sort -n | uniq -c | sort -k 2n | awk '{print $2":"$1}'`,
      )
        .toString()
        .trim()
        .split('\n')
        .map((line) => line.split(':').map((l, i) => (i ? Number(l) : l))),
    )

    it.each(
      Object.values((await ex38())!).map((count, i) => ({
        nth: i + 1,
        count,
        expected: histogram[i + 1] ? histogram[i + 1] : 0,
      })),
    )('$nth: $expected', ({ count, expected }) => {
      expect(count).toBe(expected)
    })
  })
})

// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex39 } from '../ex39'

describe("39. Zipf's law", () => {
  it('the keys being rank order and the values being frequency', async () => {
    const frequencies = Object.fromEntries(
      execSync(
        // $ cut -f 3 alice.txt.conll | sed '/^$/d' | sort | uniq -c | awk '{print $1}' | sort -n | uniq -c | sort -k 2n | awk '{print NR":"$1}'
        `cut -f 3 .${aliceTextConll} | sed '/^$/d' | sort | uniq -c | awk '{print $1}' | sort -n | uniq -c | sort -k 2n | awk '{print NR":"$1}'`,
      )
        .toString()
        .trim()
        .split('\n')
        .map((line) => line.split(':').map((l, i) => (i ? Number(l) : l))),
    )

    expect(await ex39()).toEqual(frequencies)
  })
})

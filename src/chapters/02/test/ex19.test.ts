// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex19 } from '../ex19'

describe('19. Frequency of a string in the first column in descending order', () => {
  describe('Confirm the result by using `cut`, `uniq`, and `sort` commands', async () => {
    // $ cut -f 1 popular-names.txt | sort | uniq -c | sort -k 1nr -k 2n
    const cutUniqSort = execSync(
      `cut -f 1 .${popularNames} | sort | uniq -c | sort -k 1nr -k 2n`,
    )
      .toString()
      .trim()
      .split('\n')
      .map((data) => {
        const [frequency, name] = data
          .trim()
          .split(' ')
          .map((d, i) => (i ? d : Number(d)))
        return { name, frequency }
      })
    const frequencies = (await ex19()).split('\n').map((data, i) => {
      const [name, frequency] = data
        .split('\t')
        .map((d, i) => (i ? Number(d) : d))
      return { name, frequency, expected: cutUniqSort[i] }
    })

    it.each(frequencies)(
      '$name: $frequency === $expected.name: $expected.frequency',
      ({ name, frequency, expected }) => {
        expect({ name, frequency }).toEqual(expected)
      },
    )
  })
})

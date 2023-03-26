// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex12 } from '@/chapters/02/ex12'

describe('12. col1.txt from the first column, col2.txt from the second column', () => {
  describe('Confirm the result by using `cut` command', async () => {
    const [col1, col2] = await ex12()
    const [cut1, cut2] = [1, 2].map((n) =>
      // $ cut -f ${n} popular-names.txt
      execSync(`cut -f ${n} .${popularNames}`).toString().trim(),
    )

    it.each([
      { nth: 'first', col: col1, expected: cut1 },
      { nth: 'second', col: col2, expected: cut2 },
    ])(
      'Extract the value of the $nth column of each line',
      ({ col, expected }) => {
        expect(col).toBe(expected)
      },
    )
  })
})

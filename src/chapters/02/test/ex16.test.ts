// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex16 } from '../ex16'

describe('16. Split a file into N pieces', () => {
  describe('Confirm the result by using `split` command', async () => {
    // $ tail -n 10 popular-names.txt
    const split = execSync(`split -l 10 --filter='cat; echo' .${popularNames}`)
      .toString()
      .split('\n\n')
    const files = (await ex16()).map((file, i) => ({
      nth: i + 1,
      file: file,
      expected: split[i],
    }))

    it.each(files)('file$nth: $file === $expected', ({ file, expected }) => {
      expect(file).toBe(expected)
    })
  })
})

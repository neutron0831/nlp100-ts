// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex17 } from '../ex17'

describe('17. Distinct strings in the first column', () => {
  it('Confirm the result by using `cut`, `sort`, and `uniq` commands', async () => {
    const col1 = (await ex17()).join('\n')
    // $ cut -f 1 popular-names.txt | sort | uniq
    const cutUniqSort = execSync(`cut -f 1 .${popularNames} | sort | uniq`)
      .toString()
      .trim()

    expect(col1).toBe(cutUniqSort)
  })
})

// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex18 } from '../ex18'

describe('18. Sort lines in descending order of the third column', () => {
  it('Confirm the result by using `sort` command', async () => {
    // $ sort -k 3nr -k 4n popular-names.txt
    const sort = execSync(`sort -k 3nr -k 4n .${popularNames}`)
      .toString()
      .trim()

    expect(await ex18()).toBe(sort)
  })
})

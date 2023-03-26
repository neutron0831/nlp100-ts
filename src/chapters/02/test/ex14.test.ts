// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex14 } from '../ex14'

describe('14. First N lines', () => {
  it('Confirm the result by using `head` command', async () => {
    // $ head -n 10 popular-names.txt
    const head = execSync(`head -n 10 .${popularNames}`).toString().trim()

    expect(await ex14()).toBe(head)
  })
})

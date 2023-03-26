// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex15 } from '../ex15'

describe('15. Last N lines', () => {
  it('Confirm the result by using `tail` command', async () => {
    // $ tail -n 10 popular-names.txt
    const tail = execSync(`tail -n 10 .${popularNames}`).toString().trim()

    expect(await ex15()).toBe(tail)
  })
})

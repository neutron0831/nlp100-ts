// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex10 } from '@/chapters/02/ex10'

describe('10. Line count', () => {
  it('Confirm the result by using `wc` command', async () => {
    // $ wc -l < popular-names.txt
    const wc = execSync(`wc -l < .${popularNames}`).toString()

    expect(await ex10()).toBe(Number(wc))
  })
})

// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import popularNames from '@/assets/popular-names.txt?url'
import { execSync } from 'node:child_process'
import { ex11 } from '@/chapters/02/ex11'

describe('11. Replace tabs into spaces', () => {
  it('Confirm the result by using `tr` command', async () => {
    // $ tr '\t' ' ' < popular-names.txt
    const tr = execSync(`tr '\t' ' ' < .${popularNames}`).toString()

    expect(await ex11()).toBe(tr)
  })
})

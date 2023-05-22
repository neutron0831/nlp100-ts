// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex31 } from '../ex31'

describe('31. Verbs', () => {
  it('surface forms of all verbs appearing in the text', async () => {
    // $ awk -F '\t' '$4 ~ /^VB/ { print $2 }' alice.txt.conll | sort -u
    const verbs = execSync(
      `awk -F '\t' '$4 ~ /^VB/ { print $2 }' .${aliceTextConll} | sort -u`,
    )
      .toString()
      .trim()
      .split('\n')

    expect(await ex31()).toEqual(verbs)
  })
})

// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import aliceTextConll from '@/assets/alice.txt.conll?url'
import { execSync } from 'node:child_process'
import { ex32 } from '../ex32'

describe('32. Base forms of verbs', () => {
  it('lemmas of all verbs appearing in the text', async () => {
    // $ awk -F '\t' '$4 ~ /^VB/ { print $3 }' alice.txt.conll | sort -u
    const verbs = execSync(
      `awk -F '\t' '$4 ~ /^VB/ { print $3 }' .${aliceTextConll} | sort -u`,
    )
      .toString()
      .trim()
      .split('\n')

    expect(await ex32()).toEqual(verbs)
  })
})

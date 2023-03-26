import { execSync } from 'node:child_process'
import { ex12 } from '../ex12'
import { ex13 } from '../ex13'

describe('13. Merging col1.txt and col2.txt', () => {
  it('Confirm the result by using `paste` command', async () => {
    const [col1, col2] = await ex12()
    // $ paste -d '\t' col1.txt col2.txt
    const paste = execSync(
      `paste -d '\t' <(echo -e "${col1}") <(echo -e "${col2}")`,
      {
        shell: '/bin/bash',
      },
    )
      .toString()
      .trim()

    expect(await ex13()).toBe(paste)
  })
})

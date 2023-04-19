// See [Explicit URL Imports](https://vitejs.dev/guide/assets.html#explicit-url-imports)
import enwikiCountryJsonGz from '@/assets/enwiki-country.json.gz?url'
import { execSync } from 'node:child_process'
import { ex20 } from '../ex20'

describe('20. Read JSON documents', () => {
  it('the body of the article about the United Kingdom', async () => {
    // $ gunzip -c enwiki-country.json.gz | sed -nE 's/(\{"title": "United Kingdom", "text": ".*"\})/\1/p'
    const unitedKingdom = JSON.parse(
      execSync(
        `gunzip -c .${enwikiCountryJsonGz} | sed -nE 's/(\\{"title": "United Kingdom", "text": ".*"\\})/\\1/p'`,
      ).toString(),
    )

    expect(await ex20()).toEqual(unitedKingdom)
  })
})

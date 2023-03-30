// Using custom plugin [gzip-import.ts](https://gist.github.com/neutron0831/73cfd03ef5bc14cfb132cc32a7445b35)
import enwikiCountryJson from '@/assets/enwiki-country.json.gz?raw'

/**
 *
 * @interface Article
 * @property {string} title - Title of the article
 * @property {string} text  - Body of the article
 */
export interface Article {
  title: string
  text: string
}

/**
 * ### 20. Read JSON documents
 * Read the JSON documents and output the body of the article about the United Kingdom. Reuse the output in problems 21-29.
 *
 * @returns {Promise<Article>}
 */
async function ex20(): Promise<Article> {
  const enwikiCountries: Article[] = enwikiCountryJson
    .trim()
    .split('\n')
    .map((line: string) => JSON.parse(line))
  const unitedKingdom = enwikiCountries.find(
    (country) => country.title === 'United Kingdom',
  )!

  return unitedKingdom
}

export { ex20 }

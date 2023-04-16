import { ex28 } from './ex28'

/**
 * ### 29. Country flag
 * Obtain the URL of the country flag by using the analysis result of Infobox. (Hint: convert a file reference to a URL by calling [imageinfo](https://www.mediawiki.org/wiki/API:Imageinfo) in [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page))
 *
 * @returns {Promise<string>}
 */
async function ex29(): Promise<string> {
  const { image_flag: title } = await ex28()
  const url = 'https://en.wikipedia.org/w/api.php?origin=*'
  const params = {
    action: 'query',
    format: 'json',
    prop: 'imageinfo',
    iiprop: 'url',
    titles: `File:${title}`,
  }
  const response = await fetch(
    `${url}&${Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`,
  )
  const {
    query: { pages },
  } = await response.json()
  const {
    imageinfo: [{ url: URL }],
  }: any = Object.values(pages)[0]

  return URL
}

export { ex29 }

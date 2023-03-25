// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'

/**
 * ### 11. Replace tabs into spaces
 * Replace every occurrence of a tab character into a space. Confirm the result by using `sed`, `tr`, or `expand` command.
 *
 * @returns {Promise<string>}
 */
async function ex11(): Promise<string> {
  return popularNames.replaceAll('\t', ' ')
}

export { ex11 }

// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'

/**
 * ### 10. Line count
 * Count the number of lines of the file. Confirm the result by using `wc` command.
 *
 * @returns {Promise<number>}
 */
async function ex10(): Promise<number> {
  const lines = popularNames.match(/\n/g) || []

  return lines.length
}

export { ex10 }

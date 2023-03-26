// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'
import { chunk } from 'lodash'

/**
 * ### 16. Split a file into N pieces
 * Receive a natural number $N$ from a command-line argument, and split the input file into $N$ pieces at line boundaries. Confirm the result by using `split` command.
 *
 * @param {number} N
 * @returns {Promise<string[]>}
 */
async function ex16(N: number = 10): Promise<string[]> {
  const files = chunk(popularNames.split('\n'), N).map((file) =>
    file.join('\n'),
  )

  return files
}

export { ex16 }

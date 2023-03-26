// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'

/**
 * ### 14. First N lines
 * Receive a natural number $N$ from a command-line argument, and output the first $N$ lines of the file. Confirm the result by using `head` command.
 *
 * @param {number} N
 * @returns {Promise<string>}
 */
async function ex14(N: number = 10): Promise<string> {
  const lines = popularNames.split('\n')

  return lines.slice(0, N).join('\n')
}

export { ex14 }

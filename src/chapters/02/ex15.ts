// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'

/**
 * ### 15. Last N lines
 * Receive a natural number $N$ from a command-line argument, and output the last $N$ lines of the file. Confirm the result by using `tail` command.
 *
 * @param {number} N
 * @returns {Promise<string>}
 */
async function ex15(N: number = 10): Promise<string> {
  const lines = popularNames.trim().split('\n')

  return lines.slice(-N).join('\n')
}

export { ex15 }

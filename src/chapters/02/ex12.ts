// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'
import { parse, ParseResult } from 'papaparse'

/**
 * ### 12. col1.txt from the first column, col2.txt from the second column
 * Extract the value of the first column of each line, and store the output into `col1.txt`. Extract the value of the second column of each line, and store the output into `col2.txt`. Confirm the result by using `cut` command.
 *
 * @returns {Promise<string[]>}
 */
async function ex12(): Promise<string[]> {
  const { data }: ParseResult<[string, string, number, number]> = parse(
    popularNames,
    {
      dynamicTyping: true,
      skipEmptyLines: true,
    },
  )
  const col1 = data.map((d) => d[0]).join('\n')
  const col2 = data.map((d) => d[1]).join('\n')

  return [col1, col2]
}

export { ex12 }

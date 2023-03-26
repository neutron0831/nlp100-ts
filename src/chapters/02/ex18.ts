// See [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)
import popularNames from '@/assets/popular-names.txt?raw'
import { parse, ParseResult } from 'papaparse'
import { orderBy } from 'lodash'

/**
 * ### 18. Sort lines in descending order of the third column
 * Sort the lines in descending numeric order of the third column (sort lines without changing the content of each line). Confirm the result by using `sort` command.
 *
 * @returns {Promise<string>}
 */
async function ex18(): Promise<string> {
  const { data }: ParseResult<[string, string, number, number]> = parse(
    popularNames,
    {
      dynamicTyping: true,
      skipEmptyLines: true,
    },
  )

  return orderBy(data, [(d) => d[2], (d) => d[3]], ['desc', 'asc'])
    .map((line) => line.join('\t'))
    .join('\n')
}

export { ex18 }

import { ex12 } from './ex12'
import { uniq } from 'lodash'

/**
 * ### 17. Distinct strings in the first column
 * Find distinct strings (a set of strings) of the first column of the file. Confirm the result by using `cut`, `sort`, and `uniq` commands.
 *
 * @returns {Promise<string[]>}
 */
async function ex17(): Promise<string[]> {
  const col1 = (await ex12())[0].split('\n')

  return uniq(col1).sort()
}

export { ex17 }

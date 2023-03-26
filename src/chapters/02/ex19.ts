import { ex12 } from './ex12'
import { countBy, orderBy } from 'lodash'

/**
 * ### 19. Frequency of a string in the first column in descending order
 * Find the frequency of a string in the first column, and sort the strings by descending order of their frequencies. Confirm the result by using `cut`, `uniq`, and `sort` commands.
 *
 * @returns {Promise<string>}
 */
async function ex19(): Promise<string> {
  const col1 = (await ex12())[0].split('\n')

  return orderBy(
    Object.entries(countBy(col1)),
    [(d) => d[1], (d) => d[0]],
    ['desc', 'asc'],
  )
    .map((d) => d.join('\t'))
    .join('\n')
}

export { ex19 }

import { ex12 } from './ex12'

/**
 * ### 13. Merging col1.txt and col2.txt
 * Join the contents of `col1.txt` and `col2.txt`, and create a text file whose each line contains the values of the first and second columns (separated by tab character) of the original file. Confirm the result by using `paste` command.
 *
 * @returns {Promise<string>}
 */
async function ex13(): Promise<string> {
  const [col1, col2] = (await ex12()).map((col) => col.split('\n'))
  const file = col1.map((data, i) => data + '\t' + col2[i]).join('\n')

  return file
}

export { ex13 }

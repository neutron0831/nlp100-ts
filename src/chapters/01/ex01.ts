/**
 * ### 01. "schooled"
 * Obtain the string that concatenates the 1st, 3rd, 5th, and 7th letters in the string "schooled".
 *
 * @param {string} string
 * @returns {string}
 */
function ex01(string: string = 'schooled'): string {
  return string
    .split('')
    .filter((_, i) => !(i % 2))
    .join('')
}

export { ex01 }

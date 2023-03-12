/**
 * ### 00. Reversed string
 * Obtain the string that arranges letters of the string "stressed" in reverse order (tail to head).
 *
 * @param {string} string
 * @returns {string}
 */
function ex00(string: string = 'stressed'): string {
  return string.split('').reverse().join('')
}

export { ex00 }

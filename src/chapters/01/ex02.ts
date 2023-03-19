/**
 * ### 02. "shoe" + "cold" = "schooled"
 * Obtain the string "schooled" by concatenating the letters in "shoe" and "cold" one after the other from head to tail.
 *
 * @param {string} string1
 * @param {string} string2
 * @returns {string}
 */
function ex02(string1: string = 'shoe', string2: string = 'cold'): string {
  const shoe = [...string1]
  const cold = [...string2]
  const schooled = []

  let odd = true
  while (shoe.length + cold.length > 0) {
    schooled.push(odd ? shoe.shift() : cold.shift())
    odd = !odd
  }

  return schooled.join('')
}

export { ex02 }

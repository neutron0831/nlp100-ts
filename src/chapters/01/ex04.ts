/**
 * ### 04. Atomic symbols
 * Split the sentence "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can". into words, and extract the first letter from the 1st, 5th, 6th, 7th, 8th, 9th, 15th, 16th, 19th words and the first two letters from the other words. Create an associative array (dictionary object or mapping object) that maps from the extracted string to the position (offset in the sentence) of the corresponding word.
 *
 * @returns {{ [symbol: number]: string }}
 */
function ex04(): { [symbol: number]: string } {
  const sentence =
    'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.'
  const ones = [1, 5, 6, 7, 8, 9, 15, 16, 19]
  const atoms = Object.fromEntries(
    sentence
      .replaceAll(/[,\\.]/g, '')
      .split(' ')
      .map((word, i) => [i + 1, word.slice(0, ones.includes(i + 1) ? 1 : 2)]),
  )

  return atoms
}

export { ex04 }

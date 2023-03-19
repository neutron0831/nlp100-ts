/**
 * ### 03. Pi
 * Split the sentence "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics". into words, and create a list whose element presents the number of alphabetical letters in the corresponding word.
 *
 * @returns {number[]}
 */
function ex03(): number[] {
  const sentence =
    'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.'
  const pi = sentence
    .replaceAll(/[,\\.]/g, '')
    .split(' ')
    .map((word) => word.length)

  return pi
}

export { ex03 }

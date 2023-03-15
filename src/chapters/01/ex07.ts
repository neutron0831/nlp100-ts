/**
 * ### 07. Template-based sentence generation
 * Implement a function that receives arguments, `x`, `y`, and `z` and returns a string "{y} is {z} at {x}", where "{x}", "{y}", and "{z}" denote the values of `x`, `y`, and `z`, respectively. In addition, confirm the return string by giving the arguments `x=12`, `y="temperature"`, and `z=22.4`.
 *
 * @param {number} x
 * @param {string} y
 * @param {number} z
 * @returns {string}
 */
function ex07(
  x: number = 12,
  y: string = 'temperature',
  z: number = 22.4,
): string {
  return xyz(x, y, z)
}

/**
 * Returns a string "{y} is {z} at {x}"
 * @param {number} x
 * @param {string} y
 * @param {number} z
 * @returns {string}
 */
function xyz(x: number, y: string, z: number): string {
  return `${y} is ${z} at ${x}`
}

export { ex07 }

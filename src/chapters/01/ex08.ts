/**
 * ### 08. cipher text
 * Implement a function `cipher` that converts a given string with the specification:
 * - Every alphabetical lowercase letter `c` is converted to a letter whose ASCII code is (219 - [the ASCII code of `c`])
 * - Keep other letters unchanged
 * Use this function to cipher and decipher an English message.
 *
 * @param {string} string
 * @returns {string[]}
 */
function ex08(string: string = 'Hello World!'): string[] {
  const ciphered = cipher(string)
  const deciphered = cipher(ciphered)

  return [ciphered, deciphered]
}

/**
 * Converts a given string with the specification:
 * - Every alphabetical lowercase letter `c` is converted to a letter whose ASCII code is (219 - [the ASCII code of `c`])
 * - Keep other letters unchanged
 * @param {string} text
 * @returns {string}
 */
function cipher(text: string): string {
  return text
    .split('')
    .map((c) =>
      c.match(/[a-z]/) ? String.fromCharCode(219 - c.charCodeAt(0)) : c,
    )
    .join('')
}

export { ex08 }

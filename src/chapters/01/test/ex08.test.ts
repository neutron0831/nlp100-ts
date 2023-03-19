import { ex08 } from '../ex08'

describe('08. cipher text', () => {
  const [ciphered, deciphered] = ex08()

  it('cipher an English message "Hello World!"', () => {
    expect(ciphered).toBe('Hvool Wliow!')
  })

  it('decipher an English message "Hvool Wliow!"', () => {
    expect(deciphered).toBe('Hello World!')
  })
})

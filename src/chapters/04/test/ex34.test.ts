import { ex34 } from '../ex34'

describe('34. A B', () => {
  it('the longest noun phrase consisting of consecutive nouns', async () => {
    expect(await ex34()).toBe('Ou est ma chatte ?')
  })
})

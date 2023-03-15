import { ex07 } from '../ex07'

describe('07. Template-based sentence generation', () => {
  it('a string "{y} is {z} at {x}", where x=12, y="temperature", and z=22.4', () => {
    expect(ex07()).toBe('temperature is 22.4 at 12')
  })
})

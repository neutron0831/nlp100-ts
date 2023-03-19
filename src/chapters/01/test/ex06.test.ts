import { ex06 } from '../ex06'

describe('06. Set', () => {
  const [union, intersection, difference, seInX, seInY] = ex06()

  it('the union of the sets $X$ and $Y$', () => {
    expect(union).toEqual([
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'p'],
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'p'],
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'd'],
      ['d', 'i'],
      ['i', 's'],
      ['s', 'e'],
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'g'],
      ['g', 'r'],
      ['r', 'a'],
      ['a', 'p'],
      ['p', 'h'],
    ])
  })

  it('the intersection of the sets $X$ and $Y$', () => {
    expect(intersection).toEqual([
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'p'],
    ])
  })

  it('the difference of the sets $X$ and $Y$', () => {
    expect(difference).toEqual([
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'p'],
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'p'],
      ['p', 'a'],
      ['a', 'r'],
      ['r', 'a'],
      ['a', 'd'],
      ['d', 'i'],
      ['i', 's'],
      ['s', 'e'],
    ])
  })

  it('check whether the bigram "se" is included in the sets $X$ and $Y$', () => {
    expect(seInX).toBe(true)
    expect(seInY).toBe(false)
  })
})

import { ex04 } from '../ex04'

describe('04. Atomic symbols', () => {
  it('an dictionary object that maps from the extracted string to the position of the corresponding word', () => {
    expect(ex04()).toEqual({
      1: 'H',
      2: 'He',
      3: 'Li',
      4: 'Be',
      5: 'B',
      6: 'C',
      7: 'N',
      8: 'O',
      9: 'F',
      10: 'Ne',
      11: 'Na',
      12: 'Mi',
      13: 'Al',
      14: 'Si',
      15: 'P',
      16: 'S',
      17: 'Cl',
      18: 'Ar',
      19: 'K',
      20: 'Ca',
    })
  })
})

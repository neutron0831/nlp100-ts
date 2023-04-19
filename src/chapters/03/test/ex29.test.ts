import { ex29 } from '../ex29'

describe('29. Country flag', () => {
  it('the URL of the country flag by using the analysis result of Infobox', async () => {
    expect(await ex29()).toBe(
      'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    )
  })
})

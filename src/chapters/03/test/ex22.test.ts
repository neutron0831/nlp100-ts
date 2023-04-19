import { ex22 } from '../ex22'

describe('22. Category names', () => {
  it('the category names of the article about the United Kingdom', async () => {
    expect(await ex22()).toEqual([
      'United Kingdom| ',
      'British Islands',
      'Countries in Europe',
      'English-speaking countries and territories',
      'G7 nations',
      'Group of Eight nations',
      'G20 nations',
      'Island countries',
      'Northern European countries',
      'Former member states of the European Union',
      'Member states of NATO',
      'Member states of the Commonwealth of Nations',
      'Member states of the Council of Europe',
      'Member states of the Union for the Mediterranean',
      'Member states of the United Nations',
      'Priority articles for attention after Brexit',
      'Western European countries',
    ])
  })
})

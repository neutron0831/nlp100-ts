import { ex37 } from '../ex37'

describe("37. Top-ten words co-occurring with 'Alice'", () => {
  describe('the top-ten words co-occurring with the word "Alice" and their frequencies', async () => {
    const topTenWords = [
      { word: 'the', frequency: 404 },
      { word: 'be', frequency: 333 },
      { word: 'she', frequency: 329 },
      { word: 'to', frequency: 302 },
      { word: 'and', frequency: 288 },
      { word: 'a', frequency: 231 },
      { word: 'it', frequency: 199 },
      { word: 'say', frequency: 193 },
      { word: 'I', frequency: 167 },
      { word: 'of', frequency: 148 },
    ]

    it.each(
      (await ex37())!.map((word, i) => ({
        nth: i + 1,
        ...word,
        expected: topTenWords[i].frequency,
      })),
    )('$nth $word: $expected', ({ frequency, expected }) => {
      expect(frequency).toBe(expected)
    })
  })
})

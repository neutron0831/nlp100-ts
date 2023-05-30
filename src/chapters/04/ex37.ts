import { ex30, type Morpheme } from './ex30'
import type { Frequency } from './ex35'
import Chart from 'chart.js/auto'
import { find, findIndex, map, orderBy } from 'lodash'

/**
 * ### 37. Top-ten words co-occurring with 'Alice'
 * Extract the list of words that co-occur with the word "Alice". Visualize with a chart (e.g., bar chart) the top-ten words co-occurring with the word "Alice" and their frequencies.
 *
 * @param {Chart} chart
 * @returns {Promise<Frequency[] | void>}
 */
async function ex37(chart?: Chart): Promise<Frequency[] | void> {
  const sentences: Morpheme[][] = await ex30()
  const frequencies: Frequency[] = []

  sentences.forEach((sentence) => {
    if (find(sentence, ['lemma', 'Alice'])) {
      sentence
        .filter((morpheme) => morpheme.lemma !== 'Alice')
        .forEach((morpheme) => {
          const { lemma } = morpheme
          if (["'", '`', ',', '.'].includes(lemma)) return
          const index = findIndex(frequencies, ['word', lemma])
          if (index !== -1) {
            frequencies[index].frequency++
          } else {
            frequencies.push({ word: lemma, frequency: 1 })
          }
        })
    }
  })

  const topTenWords: Frequency[] = orderBy(
    frequencies,
    ['frequency', 'word'],
    ['desc', 'asc'],
  ).slice(0, 10)
  if (!chart) return topTenWords

  const data = {
    labels: map(topTenWords, 'word'),
    datasets: [{ label: 'frequency', data: map(topTenWords, 'frequency') }],
  }
  const options = {
    scales: {
      x: { grid: { display: false } },
    },
    plugins: {
      title: { display: true, text: "Top-ten words co-occurring with 'Alice'" },
      legend: { display: false },
    },
  }
  chart.data = { ...data }
  chart.options = { ...options }
  chart.update()
}

export { ex37 }

import { ex35 } from './ex35'
import type { Frequency } from './ex35'
import Chart from 'chart.js/auto'
import { map } from 'lodash'

/**
 * ### 36. Top-ten frequent words
 * Visualize the top-ten frequent words and their frequencies with a chart (e.g., bar chart).
 *
 * @param {Chart} chart
 * @returns {Promise<Frequency[] | void>}
 */
async function ex36(chart?: Chart): Promise<Frequency[] | void> {
  const frequencies: Frequency[] = (await ex35())
    .filter((frequency) => !["'", '`', ',', '.'].includes(frequency.word))
    .slice(0, 10)

  if (!chart) return frequencies

  const data = {
    labels: map(frequencies, 'word'),
    datasets: [{ label: 'frequency', data: map(frequencies, 'frequency') }],
  }
  const options = {
    scales: {
      x: {
        grid: { display: false },
      },
    },
    plugins: {
      title: { display: true, text: 'Top-ten frequent words' },
      legend: { display: false },
    },
  }
  chart.data = { ...data }
  chart.options = { ...options }
  chart.update()
}

export { ex36 }

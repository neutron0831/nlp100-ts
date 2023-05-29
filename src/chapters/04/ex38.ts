import { ex35 } from './ex35'
import type { Frequency } from './ex35'
import Chart from 'chart.js/auto'
import { maxBy, range } from 'lodash'

/**
 * ### 38. Histogram
 * Draw a histogram of word frequency (x-axis is a scalar range representing a frequency ranging from 1 to the largest frequency of a given word in the entire corpus, and the y-axis is the count of unique words that fall into the count of the x value).
 *
 * @param {Chart} chart
 * @param {number} xScaleMax - Maximum number for the scale `x`
 * @returns {Promise<{ [frequency: number]: number } | void>}
 */
async function ex38(
  chart?: Chart,
  xScaleMax: number = Infinity,
): Promise<{ [frequency: number]: number } | void> {
  const frequencies: Frequency[] = await ex35()
  const histogram: { [frequency: number]: number } = Object.fromEntries(
    range(1, maxBy(frequencies, 'frequency')!.frequency + 1).map(
      (n: number) => [n, 0],
    ),
  )

  frequencies.forEach((word) => histogram[word.frequency]++)
  if (!chart) return histogram

  const data = {
    labels: Object.keys(histogram),
    datasets: [
      {
        label: 'count',
        data: Object.values(histogram),
        barPercentage: 1,
        categoryPercentage: 1 - 0.1 ** 16,
      },
    ],
  }
  const options = {
    scales: {
      x: {
        title: { display: true, text: 'frequency' },
        grid: { display: false },
        max: xScaleMax - 1,
      },
      y: {
        title: { display: true, text: 'count' },
      },
    },
    plugins: {
      title: { display: true, text: 'Histogram of word frequency' },
      legend: { display: false },
    },
  }
  chart.data = { ...data }
  chart.options = { ...options }
  chart.update()
}

export { ex38 }

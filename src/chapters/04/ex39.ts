import { ex38 } from './ex38'
import Chart from 'chart.js/auto'

/**
 * ### 39. Zipf's law
 * Plot a log-log graph with the x-axis being rank order and the y-axis being frequency.
 *
 * @param {HTMLCanvasElement} chart
 * @returns {Promise<{ [rank: number]: number } | void>}
 */
async function ex39(chart?: Chart): Promise<{ [rank: number]: number } | void> {
  const frequencies = Object.fromEntries(
    Object.values((await ex38())!)
      .filter((frequency) => frequency > 0)
      .map((frequency, i) => [i + 1, frequency]),
  )

  if (!chart) return frequencies

  const data = {
    datasets: [
      {
        data: Object.entries(frequencies).map(([x, y]) => ({
          x: Number(x),
          y,
        })),
      },
    ],
  }
  const options = {
    scales: {
      x: {
        type: 'logarithmic',
        title: { display: true, text: 'rank order' },
        grid: { display: false },
      },
      y: {
        type: 'logarithmic',
        title: { display: true, text: 'frequency' },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Log-log graph with the x-axis being rank order and the y-axis being frequency',
      },
      legend: { display: false },
    },
  }
  chart.data = { ...data }
  // @ts-ignore-line: TS2322
  chart.options = { ...options }
  chart.update()
}

export { ex39 }

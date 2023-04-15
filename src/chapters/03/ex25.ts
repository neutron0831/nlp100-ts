import { ex20 } from './ex20'

/**
 * ### 25. Infobox
 * Extract field names and their values in the Infobox "country", and store them in a dictionary object.
 *
 * @returns {Promise<{ [name: string]: string }>}
 */
async function ex25(): Promise<{ [name: string]: string }> {
  const { text } = await ex20()
  const infobox = text.match(/\{\{Infobox country\n([\s\S]*?)\}\}\n\n/)![1]

  return Object.fromEntries(
    [...infobox.matchAll(/\n\| (.*?)\s*=\s*([\s\S]*?)(?:(?=\n\|)|(?=$))/g)].map(
      (match) => match.slice(1),
    ),
  )
}

export { ex25 }

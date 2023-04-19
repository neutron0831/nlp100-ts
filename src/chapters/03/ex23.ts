import { ex20 } from './ex20'

/**
 * ### 23. Section structure
 * Extract section names in the article with their levels. For example, the level of the section is 1 for the MediaWiki markup `"== Section name =="`.
 *
 * @returns {Promise<{ [sectionName: string]: number }>}
 */
async function ex23(): Promise<{ [sectionName: string]: number }> {
  const { text } = await ex20()
  const sections = Object.fromEntries(
    // '==Etymology and terminology==' → [, 'Etymology and terminology', '==']
    [...text.matchAll(/={2,}(.*?)(={2,})/g)].map(([, sectionName, level]) => [
      sectionName.trim(), // 'Etymology and terminology'
      level.split('').length - 1, // 1
    ]),
  )

  return sections
}

export { ex23 }

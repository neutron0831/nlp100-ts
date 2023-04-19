import { ex25 } from './ex25'
import { pull, round } from 'lodash'

/**
 * ### 28. Remove MediaWiki markups
 * In addition to the process of the problem 27, remove MediaWiki markups from the values as much as you can, and obtain the basic information of the country in plain text format.
 *
 * @returns {Promise<{ [name: string]: string | string[] }>}
 */
async function ex28(): Promise<{ [name: string]: string | string[] }> {
  const infobox = await ex25()
  for (const [name, value] of Object.entries(infobox)) {
    infobox[name] = value
      .replaceAll(/'{2,5}(.+)'{2,5}/g, '$1') // Italics, bold, and both
      .replaceAll(/\[\[File:([^|\]]+?)(\|.+?)?\]\]/g, '$1') // File
      .replaceAll(/\[\[([^|\]]+?)(\|.+?)?\]\]/g, '$1') // Internal link
      .replaceAll(/&nbsp;/g, ' ') // Non-breaking space
      .replaceAll(/<!--.+?-->\n?/g, '') // Comment out
      .replaceAll(/<br \/>/g, '\n') // Line Break element
      .replaceAll(/<div.*>(.+?)<\/div>/g, '$1') // Content Division element
      .replaceAll(/<ref.*>(.+?)<\/ref>/g, '$1') // Reference
      .replaceAll(/<ref name=".+?"\/>/g, '') // Reference
      .replaceAll(/{{#tag:ref \|(.+?)\|group=note}}/g, '$1') // Reference
      .replaceAll(
        /{{#expr:(.+?) round (\d{1,})}}/g, // Calculation
        (_, p1, p2) =>
          String(round(Function(`'use strict'; return (${p1})`)(), p2)),
      )
      .replaceAll(/{{abbr\|(.+?)\|.*?}}/g, '$1') // Abbreviation
      .replaceAll(/{{(C|c)ite.*?\|url=([^|]+?)( ?\|.*?}|})}/g, '$2') // Citation
      .replaceAll(
        /{{coord\|(\d{1,2})\|(\d{1,2})\|N\|(\d{1,3})\|(\d{1,2})\|W.*}}/g, // Coordinates
        "$1°$2'N $3°$4'W",
      )
      .replaceAll(/{{increase}}/g, '▲') // Green up arrow
      .replaceAll(/{{decrease}}/g, '▼') // Red down arrow
      .replaceAll(
        /{{(collapsible |ub)list\s*?(( \|[^|]+?){1,}) }}/g, // Collapsible list or Unbulleted list
        (_, __, p2) =>
          pull(
            p2
              .split('|')
              .filter((m: string) => !m.includes('style'))
              .map((m: string) =>
                (m.includes('=') ? m.split('=')[1] : m).trim(),
              ),
            '',
          ).join('\n'),
      )
      .replaceAll(
        /{{hlist\s*?(( ?\|[^|]+?){1,}) ?}}/g, // Horizontal list
        (_, p1) =>
          pull(
            p1.split('|').map((m: string) => m.trim()),
            '',
          ).join(' · '),
      )
      .replaceAll(
        /{{plainlist\|(\n\* ([^|]+?){1,})}}/g, // Plain list
        (_, p1) => p1.split('\n* ').slice(1).join('\n'),
      )
      .replaceAll(
        /{{Switcher(\|(.+?){2,})\|default=\d+?}}/g, // Switcher
        (_, p1) => pull(p1.split('|'), '').join('\n'),
      )
      .replaceAll(
        /{{map_caption(( \|.+?=.+?){1,})}}/g, // Map caption
        (_, p1) =>
          p1
            .split('|')
            .slice(1)
            .map((m: string) => m.trim())
            .join('\n'),
      )
      .replaceAll(/{{(.+?)}}/g, '$1') // Braces
      .replaceAll(/\n{2}/g, '\n') // Duplicated line breaks
  }

  return Object.fromEntries(
    Object.entries(infobox).map(([key, value]) => [
      key,
      // Split the value into an array if it contains line breaks (for appearance)
      value.includes('\n') ? value.split('\n').map((v) => v.trim()) : value,
    ]),
  )
}

export { ex28 }

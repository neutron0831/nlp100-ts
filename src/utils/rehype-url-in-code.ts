import unified from 'unified'
import { map } from 'unist-util-map'
import { is } from 'unist-util-is'

export default function rehypeUrlInCode(): unified.Plugin {
  return (tree) => {
    map(tree, (node) => {
      if (
        is(node, { tagName: 'span' }) &&
        !is(node, { children: undefined }) &&
        is(node.children[0], { type: 'text' })
      ) {
        const urlRegExp =
          "https?://[\\w!\\?/\\+\\-_~=;\\.,\\*&@#\\$%\\(\\)'\\[\\]]+"
        const matches = [
          ...(node.children[0] as any).value.matchAll(
            new RegExp(String.raw`\[(.*?)\]\((${urlRegExp})\)`, 'g'),
          ),
        ]
        if (matches.length > 0) {
          const children: any[] = []
          matches.reduce((text, match) => {
            children.push({
              type: 'text',
              value: text.split(match[0])[0],
            })
            children.push({
              type: 'element',
              tagName: 'a',
              properties: {
                href: match[2],
              },
              children: [{ type: 'text', value: match[1] }],
            })
            return text.split(match[0])[1]
          }, (node.children[0] as any).value)
          return Object.assign(node, { children })
        }
      }
      return node
    })
  }
}

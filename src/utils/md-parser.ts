import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

export default class MDParser {
  parser: any

  constructor() {
    this.parser = remark()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeKatex)
      .use(rehypeHighlight)
      .use(rehypeStringify)
  }

  async parse(markdown: string): Promise<string> {
    return (await this.parser.processSync(markdown)).value
  }
}

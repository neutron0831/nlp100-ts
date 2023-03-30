import { Plugin } from 'vite'
import { readFileSync } from 'node:fs'
import { extname } from 'node:path'
import { gunzipSync } from 'zlib'

export default function gzipImport(): Plugin {
  return {
    name: 'gzip-loader',
    transform(_, id) {
      const [path, query] = id.split('?')
      if (extname(path) === '.gz' && query === 'raw') {
        const data = readFileSync(path)
        const buffer = gunzipSync(data)
        const string = JSON.stringify(buffer.toString())
        return `export default ${string}`
      }
      return null
    },
  }
}

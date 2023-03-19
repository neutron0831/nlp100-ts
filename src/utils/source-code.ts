interface Argument {
  name: string
  type: 'number' | 'string'
  default: number | string
}

function formatCode(sourceCode: string): string {
  return sourceCode
    .replaceAll(/\/\*[\s\S]*?\*\/\n/g, '')
    .replaceAll(/export \{[\s\S]*?\}\n/g, '')
    .trim()
}

function getArguments(sourceCode: string, functionName: string): Argument[] {
  const argument = sourceCode.match(
    new RegExp(String.raw`function ${functionName}\(([\s\S]*?\)):`),
  )
  const args = argument
    ? argument.slice(1)[0].match(/(.+?):\s(.+?)\s=\s([\s\S]+?)[,)]/g)
    : null
  return args
    ? args.map((arg) => {
        const [name, type, defaultValue] = arg
          .trim()
          .match(/(.+?):\s(.+?)\s=\s([\s\S]+?)[,)]/)!
          .slice(1)
        return {
          name,
          type: type as 'string' | 'number',
          default:
            type === 'string'
              ? defaultValue.slice(1, -1)
              : Number(defaultValue),
        }
      })
    : []
}

export { Argument, formatCode, getArguments }

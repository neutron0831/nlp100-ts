const { gitmojis } = require('gitmojis')
const gitmojiCodes = gitmojis.map((gitmoji) => gitmoji.code)

module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/parse'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:[a-z_]+:)\s([ -~]+[^\s])?(?:\s\((#[\d]+)\))?$/,
      headerCorrespondence: ['type', 'subject', 'ticket'],
      issuePrefixes: ['#'],
    },
  },
  rules: {
    'references-empty': [1, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [2, 'always', gitmojiCodes],
    'type-empty': [2, 'never'],
  },
}

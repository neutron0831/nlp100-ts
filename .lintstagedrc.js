module.exports = {
  '*.{js,ts,vue}': ['eslint --fix'],
  '*.{js,ts,json}': ['prettier --write'],
  '*.test.{js,ts}': [
    'cross-env NODE_OPTIONS="--max-old-space-size=6144" vitest --silent --run',
  ],
}

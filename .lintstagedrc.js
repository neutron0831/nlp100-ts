module.exports = {
  '*.{js,ts,vue}': ['eslint --fix'],
  '*.{js,ts,json}': ['prettier --write'],
  '*.test.{js,ts}': ['vitest --silent --run'],
}

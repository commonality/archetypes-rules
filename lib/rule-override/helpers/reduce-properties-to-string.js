const format = require('./format')

const reducer =
// eslint-disable-next-line no-return-assign
  (accumulator, value) => accumulator += `, ${value}`

const reducePropertiesToStrings = (ruleOverride) => {
  return Object.entries(ruleOverride)
    .map(([key, value]) => `${format.key(key)}: "${format.value(value)}"`)
    .reduce((text, value) => reducer(text, value))
}

module.exports = reducePropertiesToStrings

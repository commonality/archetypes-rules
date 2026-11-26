import format from './format'

const reducer = (accumulator, value) => `${accumulator}, ${value}`

const reducePropertiesToStrings = ruleOverride => {
  return Object.entries(ruleOverride)
    .map(([key, value]) => `${format.key(key)}: "${format.value(value)}"`)
    .reduce((text, value) => reducer(text, value))
}

export default reducePropertiesToStrings

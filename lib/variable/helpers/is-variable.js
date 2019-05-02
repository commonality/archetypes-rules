const is = require('@sindresorhus/is')

const isVariable = (ruleElement) => {
  if (is.object(ruleElement) && ruleElement.hasOwnProperty('type')) {
    const VALID_VARIABLE_TYPE = 0
    return ruleElement
      .type
      .search(/archetypes\.rules\.\w+Variable/) === VALID_VARIABLE_TYPE
  }
  return false
}

module.exports = isVariable

const isObject = require('lodash.isobject')

const isVariable = (ruleElement) => {
  if (isObject(ruleElement) && ruleElement.hasOwnProperty('type')) {
    const VALID_VARIABLE_TYPE = 0
    return ruleElement
      .type
      .search(/archetypes\.rules\.\w+Variable/) === VALID_VARIABLE_TYPE
  }
  return false
}

module.exports = isVariable

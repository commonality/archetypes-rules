const ow = require('ow')

const isVariable = (ruleElement) => {
  if (ow.isValid(ruleElement, ow.object) &&
    !ow.isValid(ruleElement.type, ow.nullOrUndefined)) {
    const VALID_VARIABLE_TYPE = 0
    return (
      ruleElement.type.search(/@archetypes\S+rules\S+\w+Variable/u) ===
      VALID_VARIABLE_TYPE
    )
  }
  return false
}

module.exports = isVariable

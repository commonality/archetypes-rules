const { isValid, nullOrUndefined } = require('ow')

const createRuleElementName = (ruleElement, anotherRuleElement, operator) => {
  if (isValid(anotherRuleElement, nullOrUndefined)) {
    return ruleElement.name
  }
  return `(${ruleElement.name} ${operator} ${anotherRuleElement.name})`
}

module.exports = createRuleElementName

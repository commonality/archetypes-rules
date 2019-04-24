const isNil = require('lodash.isnil')

const createRuleElementName = (ruleElement, anotherRuleElement, operator) => {
  if (isNil(anotherRuleElement)) {
    return ruleElement.name
  }
  return `(${ruleElement.name} ${operator} ${anotherRuleElement.name})`
}

module.exports = createRuleElementName

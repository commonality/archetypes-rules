const is = require('@sindresorhus/is')

const createRuleElementName = (ruleElement, anotherRuleElement, operator) => {
  if (is.nullOrUndefined(anotherRuleElement)) {
    return ruleElement.name
  }
  return `(${ruleElement.name} ${operator} ${anotherRuleElement.name})`
}

module.exports = createRuleElementName

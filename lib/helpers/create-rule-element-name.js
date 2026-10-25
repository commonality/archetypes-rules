import is from '@sindresorhus/is'

const createRuleElementName = (ruleElement, anotherRuleElement, operator) => {
  if (is.nullOrUndefined(anotherRuleElement)) {
    return ruleElement.name
  }
  return `(${ruleElement.name} ${operator} ${anotherRuleElement.name})`
}

export default createRuleElementName

import { isNil } from 'es-toolkit/predicate'

const createRuleElementName = (ruleElement, anotherRuleElement, operator) => {
  if (isNil(anotherRuleElement)) {
    return ruleElement.name
  }
  return `(${ruleElement.name} ${operator} ${anotherRuleElement.name})`
}

export default createRuleElementName

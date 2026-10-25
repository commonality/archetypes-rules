import toArray from 'lodash.toarray'
/* eslint-disable-next-line max-len */
import InvalidRuleElementError from '../../errors/invalid-rule-element-error'
import Operator from '../../operator/operator'
import Proposition from '../../proposition/proposition'
import Variable from '../../variable/variable'
import variableFactory from '../../variable/variable-factory'

const loadRuleElements = (elements, archetypeRef) => {
  toArray(elements).forEach(element => {
    if (Proposition.isProposition(element)) {
      archetypeRef.addProposition(element.name, element.value)
    } else if (Variable.isVariable(element)) {
      const variable = variableFactory(element.name, element.value)
      archetypeRef.addVariable(variable)
    } else if (Operator.isOperator(element)) {
      archetypeRef.addOperator(element.name)
    } else {
      throw new InvalidRuleElementError(element)
    }
  })
  return archetypeRef.elements
}

export default loadRuleElements

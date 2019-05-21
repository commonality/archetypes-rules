const { isOperator } = require('../../operator/operator')
const { isProposition } = require('../../proposition/proposition')
const { isVariable } = require('../../variable/variable')
/* eslint-disable-next-line max-len */
const InvalidRuleElementError = require('../../errors/invalid-rule-element-error')
const toArray = require('lodash.toarray')
const variableFactory = require('../../variable/variable-factory')

const loadRuleElements = (elements, archetypeRef) => {
  toArray(elements).forEach((element) => {
    if (isProposition(element)) {
      archetypeRef.addProposition(element.name, element.value)
    } else if (isVariable(element)) {
      const variable = variableFactory(element.name, element.value)
      archetypeRef.addVariable(variable)
    } else if (isOperator(element)) {
      archetypeRef.addOperator(element.name)
    } else {
      throw new InvalidRuleElementError(element)
    }
  })
  return archetypeRef.elements
}

module.exports = loadRuleElements

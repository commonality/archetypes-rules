const InvalidRuleElementError = require('../../invalid-rule-element-error')
const { isOperator } = require('../../operator/operator')
const {isProposition} = require('../../proposition/proposition')
const {isVariable} = require('../../variable/variable')
const variableFactory = require('../../variable/variable-factory')
const ow = require('ow')
const Rule = require('../../rule/rule')

const loadRuleFromObject = (data) => {
  ow(data, ow.object)

  const {name, elements} = data
  const rule = new Rule(name)
  elements.forEach((element) => {
    if (isOperator(element)) {
      rule.addOperator(element.name)
    } else if (isProposition(element)) {
      rule.addProposition(element.name, element.value)
    } else if (isVariable(element)) {
      const variable = variableFactory(element.name, element.value)
      rule.addVariable(variable)
    } else {
      throw new InvalidRuleElementError(element)
    }
  })

  return rule
}

module.exports = loadRuleFromObject

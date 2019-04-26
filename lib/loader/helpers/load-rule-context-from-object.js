const InvalidRuleElementError = require('../../invalid-rule-element-error')
const { isProposition } = require('../../proposition/proposition')
const { isVariable } = require('../../variable/variable')
const variableFactory = require('../../variable/variable-factory')
const ow = require('ow')
const RuleContext = require('../../rule-context/rule-context')
const loadRuleOverrideFromObject = require('./load-rule-override-from-object')

const loadRuleContextFromObject = (data) => {
  ow(data, ow.object)

  const {name, elements, overrides} = data
  const ruleContext = new RuleContext(name)
  const ruleElements = Object.values(elements) || []

  ruleElements.forEach((element) => {
    if (isProposition(element)) {
      ruleContext.addProposition(element.name, element.value)
    } else if (isVariable(element)) {
      const variable = variableFactory(element.name, element.value)
      ruleContext.addVariable(variable)
    } else {
      throw new InvalidRuleElementError(element)
    }
  })
  const ruleOverrides = Object.values(overrides) || []
  ruleOverrides.forEach((override) => {
    ruleContext.addRuleOverride(loadRuleOverrideFromObject(override))
  })

  return ruleContext
}

module.exports = loadRuleContextFromObject

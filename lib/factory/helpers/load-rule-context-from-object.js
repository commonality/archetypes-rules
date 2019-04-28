const loadRuleElements = require('./load-rule-elements')
const loadRuleOverrideFromObject = require('./load-rule-override-from-object')
const ow = require('ow')
const RuleContext = require('../../rule-context/rule-context')
const toArray = require('lodash.toarray')

const loadRuleContextFromObject = (data) => {
  ow(data, ow.object)

  const {name, elements, overrides} = data
  const ruleContext = new RuleContext(name)
  ruleContext.elements = loadRuleElements(elements, ruleContext)

  const ruleOverrides = toArray(overrides)
  ruleOverrides.forEach((override) => {
    const ruleOverride = loadRuleOverrideFromObject(override)
    ruleContext.addRuleOverride(ruleOverride)
  })

  return ruleContext
}

module.exports = loadRuleContextFromObject

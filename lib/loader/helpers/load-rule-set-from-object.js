const loadRuleFromObject = require('./load-rule-from-object')
const loadRuleOverrideFromObject = require('./load-rule-override-from-object')
const ow = require('ow')
const RuleSet = require('../../rule-set/rule-set')

const loadRuleSetFromObject = (literal) => {
  ow(literal, ow.object)

  const ruleSet = new RuleSet(literal.name)
  Object.values(literal.rules).forEach((rule) => {
    ruleSet.addRule(loadRuleFromObject(rule))
  })
  Object.values(literal.ruleOverrides).forEach((override) => {
    ruleSet.addRuleOverride(loadRuleOverrideFromObject(override))
  })
  return ruleSet
}

module.exports = loadRuleSetFromObject

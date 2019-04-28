const ow = require('ow')
const RuleOverride = require('../../rule-override/rule-override')

const loadRuleOverrideFromObject = (data) => {
  ow(data, ow.object)

  const { authorizedBy, raisedBy, when, why, ruleName, override } = data
  return new RuleOverride(ruleName, override, {
    authorizedBy,
    raisedBy,
    when,
    why
  })
}

module.exports = loadRuleOverrideFromObject

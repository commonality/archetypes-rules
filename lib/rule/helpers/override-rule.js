const Proposition = require('../../proposition/proposition')

const overrideRule = (ruleName, ruleContext, proposition) => {
  const ruleOverride = ruleContext.findRuleOverride(ruleName)
  if (ruleOverride) {
    return new Proposition(
      `OVERRIDE: ${ruleOverride.toString()}`,
      ruleOverride.override
    )
  }
  return proposition
}

module.exports = overrideRule

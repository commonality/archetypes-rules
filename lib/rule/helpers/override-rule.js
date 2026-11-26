import ow from 'ow'
import Proposition from '../../proposition/proposition'
import RuleContext from '../../rule-context/rule-context'
import RuleOverride from '../../rule-override/rule-override'

const overrideRule = (ruleName, ruleContext, ruleOverride) => {
  ow(ruleName, ow.string)
  ow(ruleContext, ow.object.instanceOf(RuleContext))
  ow(ruleOverride, ow.object.instanceOf(RuleOverride))

  const name = `OVERRIDE: ${ruleName}, value = ${ruleOverride.value}. REASON: ${ruleOverride.toString()}`
  const { value } = ruleOverride
  return new Proposition(name, value)
}

export default overrideRule

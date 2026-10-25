import ow from 'ow'
import RuleOverride from '../../rule-override/rule-override'

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

export default loadRuleOverrideFromObject

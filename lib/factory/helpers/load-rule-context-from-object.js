import ow from 'ow'
import RuleContext from '../../rule-context/rule-context'
import loadRuleElements from './load-rule-elements'
import loadRuleOverrideFromObject from './load-rule-override-from-object'

const loadRuleContextFromObject = data => {
  ow(data, ow.object)

  const { name, elements, overrides } = data
  const ruleContext = new RuleContext(name)
  ruleContext.elements = loadRuleElements(elements, ruleContext)

  if (overrides) {
    Object.values(overrides).forEach(override => {
      const ruleOverride = loadRuleOverrideFromObject(override)
      ruleContext.addRuleOverride(ruleOverride)
    })
  }

  return ruleContext
}

export default loadRuleContextFromObject

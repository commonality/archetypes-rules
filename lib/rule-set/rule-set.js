import set from 'lodash.set'
import assignTypeTo from '../helpers/assign-type-to'
import definePropertyLength from '../helpers/define-property-length'

class RuleSet {
  constructor(name) {
    this.name = name
    this.rules = {}
    definePropertyLength(this.rules)

    this.ruleOverrides = {}
    definePropertyLength(this.ruleOverrides)
    assignTypeTo(this)
  }

  addRule(rule) {
    set(this.rules, rule.name, rule)
    return this
  }

  addRuleOverride(override) {
    set(this.ruleOverrides, override.ruleName, override)
    return this
  }

  evaluate(ruleContext) {
    Object.values(this.ruleOverrides).forEach(ruleOverride => {
      ruleContext.addRuleOverride(ruleOverride)
    })

    const propositions = Object.values(this.rules).map(rule =>
      rule.evaluate(ruleContext)
    )

    return propositions.reduce((prev, curr) => curr.or(prev))
  }
}

export default RuleSet

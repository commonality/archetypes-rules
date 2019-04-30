const assignTypeTo = require('../helpers/assign-type-to')
const definePropertyLength = require('../helpers/define-property-length')

const set = require('lodash.set')

class RuleSet {
  constructor (name) {
    this.name = name
    this.rules = {
    }
    definePropertyLength(this.rules)

    this.ruleOverrides = {
    }
    definePropertyLength(this.ruleOverrides)
    assignTypeTo(this)
  }

  addRule (rule) {
    set(this.rules, rule.name, rule)
    return this
  }

  addRuleOverride (override) {
    set(this.ruleOverrides, override.ruleName, override)
    return this
  }

  evaluate (ruleContext) {
    const context = ruleContext
    Object.values(this.ruleOverrides)
      .forEach((ruleOverride) => context.addRuleOverride(ruleOverride))

    const propositions =
    Object.values(this.rules).map((rule) => rule.evaluate(context))

    return propositions.reduce((prev, curr) => curr.or(prev))
  }
}

module.exports = RuleSet

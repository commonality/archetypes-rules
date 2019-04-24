const definePropertyLength = require('../helpers/define-property-length')

// const get = require('lodash.get')
// const overrideRule = require('./helpers/override-rule')
// const { isProposition } = require('../proposition/proposition')

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
  }

  addRule (rule) {
    set(this.rules, rule.name, rule)
    return this
  }

  addRuleOverride (override) {
    set(this.ruleOverrides, override.ruleName, override)
    return this
  }

  // evaluate (ruleContext) {
  //   const propositions = Object
  //     .keys(this.rules).map((ruleName) => {
  //       const rule = get(this.rules, ruleName)
  //
  //       const result = overrideRule(ruleName, this, rule.evaluate(ruleContext))
  //
  //       return result
  //     })
  //     .filter((ruleElement) => {
  //
  //       return isProposition(ruleElement)
  //     })
  //   return propositions.reduce((prev, curr) => prev.or(curr))
  // }

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

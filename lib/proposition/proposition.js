const RuleElement = require('../rule-element')
const { PROPOSITION } = require('../helpers/rule-element-type')
const createRuleElementName = require('../helpers/create-rule-element-name')
const get = require('lodash.get')
const isString = require('lodash.isstring')
const ow = require('ow')

class Proposition extends RuleElement {
  constructor (name, value) {
    super(name, value, ow.boolean)
  }

  and (proposition) {
    const value = this.value && proposition.value
    return Proposition.factory(this, value, proposition, 'AND')
  }

  not () {
    return new Proposition(
      `(NOT ${this.name})`,
      !this.value
    )
  }

  or (proposition) {
    const value = this.value || proposition.value
    return Proposition.factory(this, value, proposition, 'OR')
  }

  xor (proposition) {
    const value = !this.value !== !proposition.value
    return Proposition.factory(this, value, proposition, 'XOR')
  }

  static factory (proposition, value, anotherProposition, operator) {
    if (isString(proposition)) {
      return new Proposition(proposition, value)
    }
    const name =
      createRuleElementName(proposition, anotherProposition, operator)
    return new Proposition(name, value)
  }

  static isProposition (ruleElement) {
    return get(ruleElement, 'type') === PROPOSITION
  }
}

module.exports = Proposition

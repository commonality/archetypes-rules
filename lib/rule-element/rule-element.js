const anyTypePredicate = require('../helpers/any-type-predicate')
const assignTypeTo = require('../helpers/assign-type-to')
const ow = require('ow')

class RuleElement {
  constructor (name, value, typePredicate = anyTypePredicate) {
    ow(value, typePredicate)
    this.name = name
    this.value = value
    assignTypeTo(this)
  }

  toString () {
    const ruleElementName = this.constructor.name
    return `${ruleElementName} name = ${this.name}, value = ${this.value}`
  }
}

module.exports = RuleElement

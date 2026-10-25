import ow from 'ow'
import anyTypePredicate from '../helpers/any-type-predicate'
import assignTypeTo from '../helpers/assign-type-to'

class RuleElement {
  constructor(name, value, typePredicate = anyTypePredicate) {
    ow(value, typePredicate)
    this.name = name
    this.value = value
    assignTypeTo(this)
  }

  toString() {
    const ruleElementName = this.constructor.name
    return `${ruleElementName} name = ${this.name}, value = ${this.value}`
  }
}

export default RuleElement

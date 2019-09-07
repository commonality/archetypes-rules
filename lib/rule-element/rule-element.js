const anyTypePredicate = require('../helpers/any-type-predicate')
const assignTypeTo = require('../helpers/assign-type-to')
const ow = require('ow')

/**
 * @private
 */

const defaultToJsonOptions = {
  replacer: null,
  spaces: ''
}

class RuleElement {
  constructor (name, value, typePredicate = anyTypePredicate) {
    ow(value, typePredicate)
    this.name = name
    assignTypeTo(this)
    this.value = value
  }

  toJson (options = defaultToJsonOptions) {
    const { replacer, spaces } = options
    return JSON.stringify(this, replacer, spaces)
  }

  toString () {
    const { name, type } = this
    let val = this.valueOf()
    if (typeof this.value === 'object') {
      val = JSON.stringify(this.value)
    }
    return `${type} name = ${name}, value = ${val}`
  }

  valueOf () {
    return this.value
  }
}

module.exports = RuleElement

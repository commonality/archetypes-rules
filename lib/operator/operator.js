const assignTypeTo = require('../helpers/assign-type-to')
const camelCase = require('lodash.camelcase')
const is = require('@sindresorhus/is')
const ow = require('ow')
const typeInspector = require('../type-inspector/type-inspector')
const validOperators = require('./valid-operators.json')

const defaultOptions = {
  throws: true
}

class Operator {
  constructor (name, options = defaultOptions) {
    Operator.isValid(name, options)
    this.name = name
    assignTypeTo(this)
  }

  toOperationName () {
    return camelCase(this.toString())
  }

  toString () {
    return this.name
  }

  static factory (nameOrOperator, options = defaultOptions) {
    if (is.string(nameOrOperator)) {
      return new Operator(nameOrOperator, options)
    }
    return nameOrOperator
  }

  static isOperator (ruleElement) {
    return ruleElement.type === typeInspector.OPERATOR
  }

  static isValid (
    name,
    options = {
      throws: false
    }
  ) {
    if (options.throws) {
      ow(name, ow.string.oneOf(validOperators))
    }
    return validOperators.includes(name)
  }

  valueOf () {
    return this.toString()
  }
}

module.exports = Operator

import is from '@sindresorhus/is'
import camelCase from 'lodash.camelcase'
import ow from 'ow'
import assignTypeTo from '../helpers/assign-type-to'
import typeInspector from '../type-inspector/type-inspector'
import validOperators from './valid-operators.json' with { type: 'json' }

const defaultOptions = {
  throws: true
}

class Operator {
  constructor(name, options = defaultOptions) {
    Operator.isValid(name, options)
    this.name = name
    assignTypeTo(this)
  }

  toOperationName() {
    return camelCase(this.toString())
  }

  toString() {
    return this.name
  }

  static factory(nameOrOperator, options = defaultOptions) {
    if (is.string(nameOrOperator)) {
      return new Operator(nameOrOperator, options)
    }
    return nameOrOperator
  }

  static isOperator(ruleElement) {
    return ruleElement.type === typeInspector.OPERATOR
  }

  static isValid(
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

  valueOf() {
    return this.toString()
  }
}

export default Operator

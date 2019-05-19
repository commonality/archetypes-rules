const ArrayVariable = require('./array-variable')
const {
  emptyString,
  nonEmptyString
} = require('@sindresorhus/is')
const NumberVariable = require('./number-variable')
const ow = require('ow')
const Proposition = require('../proposition/proposition')
const Variable = require('./variable')
const validateType = require('./helpers/validate-type')

class StringVariable extends Variable {
  constructor (name, value = '') {
    super(name, value, ow.any(ow.string, ow.regExp))
  }

  /**
   * Determine whether the current value is less than or equal to a specific
   * character count.
   *
   * @param {NumberVariable} numberVariable - The maximum number of characters
   * allowed.
   * @returns {Proposition} - `true` if <= max-length; `false` otherwise.
   * @memberof StringVariable
   */

  hasMaxLength (numberVariable) {
    validateType(numberVariable, NumberVariable)

    const characterCount = new NumberVariable(
      `number-of-characters`,
      this.value.length
    )
    return characterCount.lessThanOrEqualTo(numberVariable)
  }

  /**
   * Determine whether the current value is greater than or equal to a given
   * character count.
   *
   * @param {NumberVariable} numberVariable - The minimum number of characters
   * allowed.
   * @returns {Proposition} - `true` if >= min-length; `false` otherwise.
   * @memberof StringVariable
   */

  hasMinLength (numberVariable) {
    validateType(numberVariable, NumberVariable)

    const characterCount = new NumberVariable(
      `number-of-characters`,
      this.value.length
    )
    return characterCount.greaterThanOrEqualTo(numberVariable)
  }

  isEmpty () {
    const proposition = new Proposition(
      'is-empty-string',
      emptyString(this.value)
    )
    return Proposition.factory(this, proposition.value, proposition, 'IS_EMPTY')
  }

  isNotEmpty () {
    const proposition = new Proposition(
      'is-not-empty-string',
      nonEmptyString(this.value)
    )
    return Proposition.factory(
      this,
      proposition.value,
      proposition,
      'IS_NOT_EMPTY'
    )
  }

  isOneOf (arrayVariable) {
    validateType(arrayVariable, ArrayVariable)

    return Proposition.factory(
      this,
      arrayVariable.value.includes(this.value),
      arrayVariable,
      'IS_ONE_OF'
    )
  }

  endsWith (stringVariable) {
    validateType(stringVariable, StringVariable)

    return Proposition.factory(
      this,
      this.value.endsWith(stringVariable.value),
      stringVariable,
      'ENDS_WITH'
    )
  }

  includes (stringVariable) {
    validateType(stringVariable, StringVariable)

    return Proposition.factory(
      this,
      this.value.includes(stringVariable.value),
      stringVariable,
      'INCLUDES'
    )
  }
  matches (regexVariable) {
    validateType(regexVariable.value, RegExp)

    const value = Array.isArray(this.value.match(regexVariable.value))
    return Proposition.factory(this, value, regexVariable, 'MATCHES')
  }

  startsWith (stringVariable) {
    validateType(stringVariable, StringVariable)

    const value = this.value.startsWith(stringVariable.value)
    return Proposition.factory(this, value, stringVariable, 'STARTS_WITH')
  }

  static createNullObject (name) {
    const variable = new StringVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = StringVariable

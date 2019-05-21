const ArrayVariable = require('./array-variable')
const { emptyString, nonEmptyString } = require('@sindresorhus/is')
const NumberVariable = require('./number-variable')
const ow = require('ow')
const Proposition = require('../proposition/proposition')
const Variable = require('./variable')
const validateType = require('./helpers/validate-type')

class StringVariable extends Variable {
  constructor (name, value = '') {
    super(name, value, ow.any(ow.string, ow.regExp))
  }

  endsWith (stringVariable) {
    validateType(stringVariable, StringVariable)

    return new Proposition(
      `(${this.name} ENDS_WITH "${stringVariable.value}")`,
      this.value.endsWith(stringVariable.value)
    )
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

  exceedsMaxLength (numberVariable) {
    validateType(numberVariable, NumberVariable)

    return new Proposition(
      `${this.name} EXCEEDS_MAX_LENGTH ${numberVariable.value}`,
      this.value.length <= numberVariable.value
    )
  }

  isEmpty () {
    return new Proposition(`(IS_EMPTY ${this.name})`, emptyString(this.value))
  }

  isNotEmpty () {
    return new Proposition(
      `(IS_NOT_EMPTY ${this.name})`,
      nonEmptyString(this.value)
    )
  }

  isOneOf (arrayVariable) {
    validateType(arrayVariable, ArrayVariable)

    return new Proposition(
      `(${this.name} IS_ONE_OF "${arrayVariable.value.join('", "')}")`,
      arrayVariable.value.includes(this.value)
    )
  }

  includes (stringVariable) {
    validateType(stringVariable, StringVariable)

    return new Proposition(
      `(${this.name} INCLUDES "${stringVariable.value}")`,
      this.value.includes(stringVariable.value)
    )
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

  lacksMinLength (numberVariable) {
    validateType(numberVariable, NumberVariable)

    const characterCount = new NumberVariable(
      `number-of-characters`,
      this.value.length
    )
    return characterCount.greaterThanOrEqualTo(numberVariable)
  }
  matches (regexVariable) {
    validateType(regexVariable.value, RegExp)

    const value = Array.isArray(this.value.match(regexVariable.value))
    return new Proposition(
      `(${this.name} MATCHES ${regexVariable.value})`,
      value
    )
  }

  startsWith (stringVariable) {
    validateType(stringVariable, StringVariable)

    const value = this.value.startsWith(stringVariable.value)
    return new Proposition(
      `(${this.name} STARTS_WITH "${stringVariable.value}")`,
      value
    )
  }

  static createNullObject (name) {
    const variable = new StringVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = StringVariable

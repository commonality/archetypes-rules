const Proposition = require('../proposition/proposition')
const Variable = require('./variable')
const camelCase = require('lodash.camelcase')
const dataTypePredicateMap = require('./helpers/data-type-predicate-map')
const getValidatedNumberValue = require('./helpers/get-validated-number-value')
const ow = require('ow')

/**
 *
 * @private
 */

const getVariableType = (variable) => {
  ow(variable, ow.any(ow.object, ow.string))
  if (ow.isValid(variable, ow.string)) {
    return variable
  }
  return camelCase(
    variable.type
      .split('/')
      .pop()
      .replace('Variable', '')
  )
}

/**
 * @classdesc
 *
 *
 * @class ArrayVariable
 * @extends {Variable}
 */

class ArrayVariable extends Variable {
  constructor (name, value = []) {
    super(name, value, ow.array)
  }

  deepEqual (variable) {
    return this.equalTo(variable)
  }

  /**
   * Determine whether the ArrayVariable's value has no elements.
   */

  empty () {
    return this.isEmpty()
  }

  /**
   * Test an array to end with a specific value.
   * The value is tested by identity, not structure.
   */

  endsWith (variable) {
    return new Proposition(
      `(${this.name} ENDS_WITH ${variable.value})`,
      ow.isValid(this.value, ow.array.endsWith(...variable.value))
    )
  }

  /**
   * Test the instance Variable's value to be deeply equal to the
   * provided variable.
   *
   * @param {Variable} variable - A Variable object.
   * @returns {Proposition} - A Proposition with a name and (truth) value.
   * @memberof ArrayVariable
   */

  equalTo (variable) {
    return new Proposition(
      `(${this.name} EQUAL_TO ${variable.value})`,
      ow.isValid(this.value, ow.array.deepEqual(variable.value))
    )
  }

  greaterThan (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} GREATER_THAN ${number})`,
      this.value.length > number
    )
  }

  greaterThanOrEqualTo (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} GREATER_THAN_OR_EQUAL_TO ${number})`,
      this.value.length >= number
    )
  }

  /**
   * Test an array to include all the provided elements.
   * The values are tested by identity, not structure.
   */

  includes (variable) {
    return new Proposition(
      `${this.name} INCLUDES ${variable.value}`,
      ow.isValid(this.value, ow.array.includes(...variable.value))
    )
  }

  /**
   * Test an array to include any of the provided elements.
   * The values are tested by identity, not structure.
   */

  includesAny (variable) {
    return new Proposition(
      `${this.name} INCLUDES_ANY ${variable.value}`,
      ow.isValid(this.value, ow.array.includesAny(...variable.value))
    )
  }

  /**
   * Determine whether the ArrayVariable's value has no elements.
   */

  isEmpty () {
    return new Proposition(
      `(IS_EMPTY ${this.name})`,
      ow.isValid(this.value, ow.array.empty)
    )
  }

  /**
   * Determine whether the ArrayVariable's value has one or more elements.
   */

  isNotEmpty () {
    return new Proposition(
      `(IS_NOT_EMPTY ${this.name})`,
      ow.isValid(this.value, ow.array.nonEmpty)
    )
  }

  /**
   * Test an array to have a specific length.
   */

  length (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} LENGTH ${number})`,
      ow.isValid(this.value, ow.array.length(number))
    )
  }

  lessThan (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} LESS_THAN ${number})`,
      this.value.length < number
    )
  }

  lessThanOrEqualTo (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} LESS_THAN_OR_EQUAL ${number})`,
      this.value.length <= number
    )
  }

  /**
   * Test an array to have a maximum length.
   */

  maxLength (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} MAX_LENGTH ${number})`,
      ow.isValid(this.value, ow.array.maxLength(number))
    )
  }

  /**
   * Test an array to have a minimum length.
   */

  minLength (variable) {
    const number = getValidatedNumberValue(variable)
    return new Proposition(
      `(${this.name} MIN_LENGTH ${number})`,
      ow.isValid(this.value, ow.array.minLength(number))
    )
  }

  /**
   * Determine whether the ArrayVariable's value has one or more elements.
   */

  nonEmpty () {
    return this.isNotEmpty()
  }

  /**
   * Test all elements in the array to match to provided predicate.
   */

  ofType (variable) {
    ow(variable, ow.any(ow.object.instanceOf(Variable), ow.string))
    const dataType = getVariableType(variable)
    const predicate = dataTypePredicateMap.get(dataType)
    return new Proposition(
      `(${this.name} OF_TYPE ${dataType})`,
      ow.isValid(this.value, ow.array.ofType(predicate))
    )
  }

  /**
   * Test an array to start with a specific value.
   * The value is tested by identity, not structure.
   */

  startsWith (variable) {
    return new Proposition(
      `(${this.name} STARTS_WITH ${variable.value})`,
      ow.isValid(this.value, ow.array.startsWith(...variable.value))
    )
  }

  static createNullObject (name) {
    const variable = new ArrayVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = ArrayVariable

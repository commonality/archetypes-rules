import is from '@sindresorhus/is'
import includes from 'lodash.includes'
import intersection from 'lodash.intersection'
import isEqual from 'lodash.isequal'
import ow from 'ow'
import Proposition from '../proposition/proposition'
import Variable from './variable'

const EMPTY = 0

/**
 * @classdesc
 * An archetypes.rules.Variable sub-type whose <code>value</code> property is of
 * type
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array}.
 *
 * <p>The {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array} object, as with arrays in other programming languages, enables storing a
 * collection of multiple items under a single variable name, and has members for
 * performing common array operations.
 *
 * @extends {archetypes.rules.Variable}
 * @memberof archetypes.rules
 * @property {string} name - The variable's identifier.
 * @property {Array.<*>} value - An
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array}.
 * @property {string} type - "archetypes.rules.ArrayVariable" @readonly
 */

class ArrayVariable extends Variable {
 /**
  * Create a new ArrayVariable.
  * @param {string} name - The variable's identifier
  * @param {Array.<*>} [values = []] - An
  * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array}
  * of values.
  */
  constructor(name, values = []) {
    super(name, values, ow.array)
  }

  /**
   * Determine whether an ArrayVariable's value (Array) has nothing in it.
   *
   * @returns {Proposition} - Proposition with a value of `true` if the
   * ArrayVariable.prototype.value array has no elements otherwise `false`.
   * @memberof ArrayVariable
   */

  isEmpty() {
    return new Proposition('IS_EMPTY', this.value.length === EMPTY)
  }

  /**
   * Determine whether an ArrayVariable's value (Array) has anything in it.
   *
   * @returns {Proposition} - Proposition with a value of `true` if the
   * ArrayVariable.prototype.value array has elements otherwise `false`.
   * @memberof ArrayVariable
   */

  isNonEmpty() {
    return new Proposition('IS_NON_EMPTY', this.value.length !== EMPTY)
  }

  /**
   * @override
   *
   * @param {ArrayVariable} arrayVariable - Another ArrayVariable to compare
   * against.
   * @returns {boolean} - True of all elements match, otherwise false.
   * @memberof ArrayVariable
   */

  equalTo(variable) {
    const value = isEqual(this.value, variable.value)
    return Proposition.factory(this, value, variable, '===')
  }

  greaterThan(variable) {
    const value = this.value.length > variable.value.length
    return Proposition.factory(this, value, variable, '>')
  }

  greaterThanOrEqualTo(variable) {
    const value = this.value.length >= variable.value.length
    return Proposition.factory(this, value, variable, '≥')
  }

  includes(variable) {
    const value = includes(this.value, ...variable.value)
    return Proposition.factory(this, value, variable, 'INCLUDES')
  }

  includesAny(variable) {
    const value = is.nonEmptyArray(intersection(this.value, variable.value))
    return Proposition.factory(this, value, variable, 'INCLUDES_ANY')
  }

  lessThan(variable) {
    const value = this.value.length < variable.value.length
    return Proposition.factory(this, value, variable, '<')
  }

  lessThanOrEqualTo(variable) {
    const value = this.value.length <= variable.value.length
    return Proposition.factory(this, value, variable, '⩽')
  }

  notEqualTo(variable) {
    const proposition = Proposition.factory(this, true, variable, '≠')
    try {
      ow(variable.value, ow.array.not.deepEqual(this.value))
    } catch (err) {
      console.warn(`${err}`)
      proposition.value = false
    }

    return proposition
  }

  static createNullObject(name) {
    const variable = new ArrayVariable(name)
    variable.value = null
    return variable
  }
}

export default ArrayVariable

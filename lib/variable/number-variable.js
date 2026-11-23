import ow from 'ow'
import Variable from './variable'

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
 * values represent floating-point numbers like <samp>37</samp> or
 * <samp>-9.25</samp>.
 *
 * The Number constructor contains constants and methods for working with
 * numbers. Values of other types can be converted to numbers using the Number()
 * function.

 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The NumberVariable's identifier.
 * @property {Number} value - A
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
 * instance.
 * @property {String} type - "archetypes.rules.NumberVariable" @readonly
 */
class NumberVariable extends Variable {
  /**
   * Create a new NumberVariable.
   * @param {String} name - The NumberVariable's identifier.
   * @param {Number} [value = 0] - A
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
   * instance.
   */
  constructor(name, value = 0) {
    super(name, value, ow.number)
  }

  /**
   * Return a number primitive.
   * @instance
   * @return {Number} value - A number primitive.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new NumberVariable(name)
    variable.value = null
    return variable
  }
}

export default NumberVariable

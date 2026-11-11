import ow from 'ow'
import Variable from './variable'

/**
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
 * values represent floating-point numbers like <samp>37</samp> or
 * <samp>-9.25</samp>.
 *
 * The Number constructor contains constants and methods for working with
 * numbers. Values of other types can be converted to numbers using the Number()
 * function.

 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The NumberVariable's identifier.
 * @property {Number} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
 * instance.
 * @property {string} type - "archetypes.rules.NumberVariable" @readonly
 */
class NumberVariable extends Variable {
  /**
   * Create a new NumberVariable.
   * @param {string} name - The NumberVariable's identifier.
   * @param {Number} [value = 0] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number Number}
   * instance.
   */
  constructor(name, value = 0) {
    super(name, value, ow.number)
  }

  static createNullObject(name) {
    const variable = new NumberVariable(name)
    variable.value = null
    return variable
  }
}

export default NumberVariable

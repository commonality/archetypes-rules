import ow from 'ow'
import Variable from './variable'

/**
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error Error}
 * objects are thrown when runtime errors occur. The Error object can also be
 * used as a base object for user-defined exceptions. See below for standard
 * built-in error types.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The ErrorVariable's identifier.
 * @property {Error} value - An
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error Error}
 * instance.
 * @property {string} type - "archetypes.rules.ErrorVariable" @readonly
 */
class ErrorVariable extends Variable {
  /**
   * Create a new ErrorVariable.
   * @param {string} name - The ErrorVariable's identifier.
   * @param {Error} value - An
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error Error}
   * instance.
   */
  constructor(name, value) {
    super(name, value, ow.error)
  }

  static createNullObject(name) {
    const variable = new ErrorVariable(name, new Error('NullErrorVariable'))
    variable.value = null
    return variable
  }
}

export default ErrorVariable

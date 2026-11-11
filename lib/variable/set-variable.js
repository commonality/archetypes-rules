import ow from 'ow'
import Variable from './variable'

/**
 * The
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Sets/Set Set}
 * object lets you store unique values of any type, whether primitive values or
 * object references.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The SetVariable's identifier.
 * @property {Set} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Sets/Set Set}
 * instance.
 * @property {string} type - "archetypes.rules.SetVariable" @readonly
 */
class SetVariable extends Variable {
  /**
   * Create a new SetVariable.
   * @param {string} name - The SetVariable's identifier.
   * @param {Set} [value = new Set()] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Sets/Set Set}
   * instance.
   */
  constructor(name, value = new Set()) {
    super(name, value, ow.set)
  }

  static createNullSet(name) {
    const variable = new SetVariable(name)
    variable.value = null
    return variable
  }
}

export default SetVariable

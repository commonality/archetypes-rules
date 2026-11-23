import ow from 'ow'
import Variable from './variable'

/**
 * The
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set Set}
 * object lets you store unique values of any type, whether primitive values or
 * object references.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The SetVariable's identifier.
 * @property {Set} value - A
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set Set}
 * instance.
 * @property {String} type - "archetypes.rules.SetVariable" @readonly
 */
class SetVariable extends Variable {
  /**
   * Create a new SetVariable.
   * @param {String} name - The SetVariable's identifier.
   * @param {Set} [value = new Set()] - A
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set Set}
   * instance.
   */
  constructor(name, value = new Set()) {
    super(name, value, ow.set)
  }

  /**
   * Return the Set value.
   * @instance
   * @return {Set} value - A Set value.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new SetVariable(name)
    variable.value = null
    return variable
  }
}

export default SetVariable

import ow from 'ow'
import Variable from './variable'

/**
 * A
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet WeakSet}
 * is a collection of garbage-collectable values, including objects and
 * non-registered symbols. A value in the WeakSet may only occur once. It is
 * unique in the WeakSet's collection.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The WeakSet's identifier.
 * @property {WeakSet} value - A @readonly
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet WeakSet}
 * instance.
 * @property {String} type - @readonly "archetypes.rules.WeakSetVariable"
 */
class WeakSetVariable extends Variable {
  /**
   * Create a new WeakSetVariable.
   *
   * @param {String} name - The WeakSet's identifier.
   * @param {WeakSet} [value = new WeakSet()] - A
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet WeakSet}
   * instance.
   */
  constructor(name, value = new WeakSet()) {
    super(name, value, ow.weakSet)
  }

  /**
   * Return the WeakSet primitive value.
   * @instance
   * @return {WeakSet} value - A WeakSet value.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new WeakSetVariable(name)
    variable.value = null
    return variable
  }
}

export default WeakSetVariable

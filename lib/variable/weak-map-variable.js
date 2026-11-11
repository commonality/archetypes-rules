import ow from 'ow'
import Variable from './variable'

/**
 * A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap WeakMap}
 * is a collection of key/value pairs whose keys must be objects or
 * non-registered symbols, with values of any arbitrary JavaScript type, and
 * which does not create strong references to its keys. That is, an object's
 * presence as a key in a WeakMap does not prevent the object from being garbage
 * collected. Once an object used as a key has been collected, its corresponding
 * values in any WeakMap become candidates for garbage collection as well — as
 * long as they aren't strongly referred to elsewhere. The only primitive type
 * that can be used as a WeakMap key is symbol — more specifically,
 * non-registered symbols — because non-registered symbols are guaranteed to be
 * unique and cannot be re-created.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The WeakMapVariable's identifier.
 * @property {WeakMap} [value = new WeakMap()] - A @readonly
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap WeakMap}
 * instance.
 * @property {string} [type = "archetypes.rules.WeakMapVariable"] - @readonly
 *
 */
class WeakMapVariable extends Variable {
  /**
   * Create a new WeakMapVariable.
   *
   * @param {string} name - The WeakMapVariable's identifier.
   * @param {WeakMap} [value = new WeakMap()] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap WeakMap}
   * instance.
   */
  constructor(name, value = new WeakMap()) {
    super(name, value, ow.weakMap)
  }

  static createNullObject(name) {
    const variable = new WeakMapVariable(name)
    variable.value = null
    return variable
  }
}

export default WeakMapVariable

import ow from 'ow'
import Variable from './variable'

/**
 * A [WeakMap ![External link][ext-link]][href-weak-map] is a collection of
 * <samp>key</samp>/<samp>value</samp> pairs whose keys must be
 * [Object ![External link][ext-link]][href-object]s
 * or [non-registered symbols ![External
 * link][ext-link]][href-shared-symbols], with values of <code>any</code>
 * arbitrary [JavaScript type ![External link][ext-link]][href-data-structures],
 * and which does not create strong references to its keys. That is, an object's
 * presence as a key in a WeakMap does not prevent the object from being garbage
 * collected. Once an object used as a key has been collected, its corresponding
 * values in any WeakMap become candidates for garbage collection as well — as
 * long as they aren't strongly referred to elsewhere. The only primitive type
 * that can be used as a WeakMap key is symbol — more specifically,
 * non-registered symbols — because non-registered symbols are guaranteed to be
 * unique and cannot be re-created.
 *
 * [href-data-structures]:
 *     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
 * [href-shared-symbols]:
 *     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry
 * [href-object]:
 *     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * [href-weak-map]:
 *     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 * [ext-link]: https://img.icons8.com/material-outlined/CFDBD5/24/share-3.png 'External
 *     link'
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The WeakMapVariable's identifier.
 * @property {WeakMap} value - A @readonly
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap WeakMap}
 * instance.
 * @property {String} type - @readonly "archetypes.rules.WeakMapVariable"
 *
 */
class WeakMapVariable extends Variable {
  /**
   * Create a new WeakMapVariable.
   *
   * @param {String} name - The WeakMapVariable's identifier.
   * @param {WeakMap} [value = new WeakMap()] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap WeakMap}
   * instance.
   */
  constructor(name, value = new WeakMap()) {
    super(name, value, ow.weakMap)
  }

  /**
   * Return the WeakMap primitive value.
   * @instance
   * @return {WeakMap} value - A WeakMap value.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new WeakMapVariable(name)
    variable.value = null
    return variable
  }
}

export default WeakMapVariable

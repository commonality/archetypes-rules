import ow from 'ow'
import Variable from './variable'

/**
 * The
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map Map}
 * object holds key-value pairs and remembers the original insertion order of
 * the keys. Any value (both objects and primitive values) may be used as either
 * a key or a value.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The MapVariable's identifier.
 * @property {Map} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map Map}
 * instance.
 * @property {string} type - "archetypes.rules.MapVariable" @readonly
 */
class MapVariable extends Variable {
  /**
   * Create a new MapVariable.
   * @param {string} name - The MapVariable's identifier.
   * @param {Map} [value = new Map()] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map Map}
   * instance.
   */
  constructor(name, value = new Map()) {
    super(name, value, ow.map)
  }

  static createNullObject(name) {
    const variable = new MapVariable(name)
    variable.value = null
    return variable
  }
}

export default MapVariable

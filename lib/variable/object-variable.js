import ow from 'ow'
import Variable from './variable'

/**
 * The
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object Object}
 * type represents one of JavaScript's data types. It is used to store various
 * keyed collections and more complex entities. Objects can be created using the
 * Object() constructor or the object initializer / literal syntax.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The ObjectVariable's identifier.
 * @property {Object} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object Object}
 * instance.
 * @property {string} type - "archetypes.rules.ObjectVariable" @readonly
 */
class ObjectVariable extends Variable {
  /**
   * Create a new ObjectVariable.
   * @param {string} name - The ObjectVariable's identifier.
   * @param {Object} [value = {}] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object Object}
   * instance.
   */
  constructor(name, value = {}) {
    super(name, value, ow.object)
  }

  static createNullObject(name) {
    const variable = new ObjectVariable(name)
    variable.value = null
    return variable
  }
}

export default ObjectVariable

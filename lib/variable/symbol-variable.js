import ow from 'ow'
import Variable from './variable'

/**
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
 * is a built-in object whose constructor returns a symbol primitive — also
 * called a Symbol value or just a Symbol — that's guaranteed to be unique.
 * Symbols are often used to add unique property keys to an object that won't
 * collide with keys any other code might add to the object, and which are
 * hidden from any mechanisms other code will typically use to access the
 * object. That enables a form of weak encapsulation, or a weak form of
 * information hiding.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The SymbolVariable's identifier.
 * @property {Symbol} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
 * instance.
 * @property {string} type - "archetypes.rules.SymbolVariable" @readonly
 */
class SymbolVariable extends Variable {
  /**
   * Create a new SymbolVariable.
   * @param {string} name - The SymbolVariable's identifier.
   * @param {Symbol} value - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
   * instance.
   */
  constructor(name, value) {
    super(name, value, ow.symbol)
  }
}

export default SymbolVariable

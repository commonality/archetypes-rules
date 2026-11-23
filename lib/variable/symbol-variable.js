import ow from 'ow'
import Variable from './variable'

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
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
 * @property {String} name - The SymbolVariable's identifier.
 * @property {Symbol} value - A
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
 * instance.
 * @property {String} type - "archetypes.rules.SymbolVariable" @readonly
 */
class SymbolVariable extends Variable {
  /**
   * Create a new SymbolVariable.
   * @param {String} name - The SymbolVariable's identifier.
   * @param {Symbol} value - A
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol Symbol}
   * instance.
   */
  constructor(name, value) {
    super(name, value, ow.symbol)
  }

  /**
   * Return the Symbol primitive value.
   * @instance
   * @return {Symbol} value - A Symbol value.
   */
  valueOf() {
    return this.value
  }
}

export default SymbolVariable

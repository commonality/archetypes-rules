import ow from 'ow'
import Variable from './variable'

/**
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt BigInt}
 * values represent integer values which are {@linkcode
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 * too high} or {@linkcode
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
 * too low} to be represented by the <code>number</code> {@linkcode
 * https://developer.mozilla.org/en-US/docs/Glossary/Primitive primitive}.
 *
 * <p>A BigInt value, also sometimes just called a BigInt, is a bigint primitive,
 * created by appending <code>n</code> to the end of an integer literal, or by calling the
 * <code>BigInt()</code> function (without the <code>new</code> operator) and giving it an
 * integer value or string value.

 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The BigIntVariable's identifier.
 * @property {BigInt} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt BigInt}
 * instance.
 * @property {String} type - "archetypes.rules.BigIntVariable" @readonly
 */
class BigIntVariable extends Variable {
  /**
   * Create a new BigIntVariable.
   * @param {String} name - The BigIntVariable's identifier.
   * @param {BigInt} value - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt BigInt}
   * instance.
   */
  constructor(name, value) {
    super(name, value, ow.bigint)
  }

  /**
   * Return a bigint primitive.
   * @instance
   * @return {bigint} value - A BigInt.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new BigIntVariable(name, BigInt(Number.MAX_SAFE_INTEGER))
    variable.value = null
    return variable
  }
}

export default BigIntVariable

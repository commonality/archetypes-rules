import ow from 'ow'
import Variable from './variable'

/**
 * The
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp RegExp}
 * object is used for matching text with a pattern.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The RegExpVariable's identifier.
 * @property {RegExp} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp RegExp}
 * instance.
 * @property {String} type - "archetypes.rules.RegExpVariable" @readonly
 */
class RegExpVariable extends Variable {
  /**
   * Create a new RegExpVariable.
   * @param {String} name - The RegExpVariable's identifier.
   * @param {RegExp} value - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp RegExp}
   * instance.
   * @example <caption>There are two ways to create a <code>RegExp</code>
   * object: a literal notation and a constructor.</caption> const re = /ab+c/i;
   * // literal notation
   *
   * // OR constructor with string pattern as first argument
   *
   * const re = new RegExp("ab+c", "i")
   *
   * // OR constructor with regular expression literal as first argument
   *
   * const re = new RegExp(/ab+c/, "i")
   */
  constructor(name, value) {
    super(name, value, ow.regExp)
  }

  /**
   * Return the RegExp value.
   * @instance
   * @return {RegExp} value - A RegExp value.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new RegExpVariable(name, /.*/gm)
    variable.value = null
    return variable
  }
}

export default RegExpVariable

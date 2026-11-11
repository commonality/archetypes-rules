import is from '@sindresorhus/is'
import ow from 'ow'
import Proposition from '../proposition/proposition'
import ArrayVariable from './array-variable'
import validateType from './helpers/validate-type'
import NumberVariable from './number-variable'
import Variable from './variable'

/**
 * The
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Strings/String String}
 * object is used to represent and manipulate a sequence of characters.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {string} name - The StringVariable's identifier.
 * @property {string} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Strings/String String}
 * instance.
 * @property {string} type - "archetypes.rules.StringVariable" @readonly
 */
class StringVariable extends Variable {
  /**
   * Create a new StringVariable.
   * @param {string} name - The StringVariable's identifier.
   * @param {string} [value = ''] - A
   * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Strings/String String}
   * instance.
   */
  constructor(name, value = '') {
    super(name, value, ow.any(ow.string, ow.regExp))
  }

  /**
   * Determines whether this StringVariable's <code>value</code> property ends
   * with the characters of another StringVariable, returning <code>true</code>
   * or <code>false</code> as appropriate.
   *
   * @method endsWith
   * @param {archetypes.rules.StringVariable} stringVariable - The variable to
   * compare
   * @returns {archetypes.rules.Proposition} A new Proposition with the value of
   * <code>true</code> if the given characters are found at the end of the
   * string, including when stringVariable.value is an empty string; otherwise,
   * <code>false</code>.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */
  endsWith(stringVariable) {
    validateType(stringVariable, StringVariable)

    return new Proposition(
      `(${this.name} ENDS_WITH "${stringVariable.value}")`,
      this.value.endsWith(stringVariable.value)
    )
  }

  /**
   * Determine whether the current value's character count is less than or equal
   * to a specific character count.
   *
   * @method exceedsMaxLength
   * @param {archetypes.rules.NumberVariable} numberVariable - The maximum
   * number of characters allowed.
   * @returns {archetypes.rules.Proposition} <code>true</code> if <= max-length;
   * <code>false</code> otherwise.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */

  exceedsMaxLength(numberVariable) {
    validateType(numberVariable, NumberVariable)

    return new Proposition(
      `${this.name} EXCEEDS_MAX_LENGTH ${numberVariable.value}`,
      this.value.length <= numberVariable.value
    )
  }

  /**
   * Determine whether this StringVariable's <code>value</code> has no (zero)
   * characters.
   *
   * @method isEmpty
   * @returns {Proposition} <code>true</code> if <code>this.value.length ===
   * 0</code>; otherwise <code>false</code>.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */
  isEmpty() {
    return new Proposition(
      `(IS_EMPTY ${this.name})`,
      is.emptyString(this.value)
    )
  }

  /**
   * Determine whether this StringVariable's <code>value</code> has no (zero)
   * characters.
   *
   * @method isNotEmpty
   * @returns {Proposition} <code>false</code> if <code>this.value.length ===
   * 0</code>; otherwise <code>true</code>.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */
  isNotEmpty() {
    return new Proposition(
      `(IS_NOT_EMPTY ${this.name})`,
      is.nonEmptyString(this.value)
    )
  }

  isOneOf(arrayVariable) {
    validateType(arrayVariable, ArrayVariable)

    return new Proposition(
      `(${this.name} IS_ONE_OF "${arrayVariable.value.join('", "')}")`,
      arrayVariable.value.includes(this.value)
    )
  }

  /**
   * Performs a case-sensitive search to determine whether this StringVariable's
   * value may be found within another StringVariable, returning true or false
   * as appropriate.
   *
   * @method includes
   * @returns {Proposition} <true> if included; <code>false</code>, otherwise.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */
  includes(stringVariable) {
    validateType(stringVariable, StringVariable)

    return new Proposition(
      `(${this.name} INCLUDES "${stringVariable.value}")`,
      this.value.includes(stringVariable.value)
    )
  }

  /**
   * Determine whether the current value is greater than or equal to a given
   * character count.
   *
   * @method lacksMinLength
   * @param {archetypes.rules.NumberVariable} numberVariable - The minimum
   * number of characters allowed.
   * @returns {archetypes.rules.Proposition} <code>true</code> if <code>=
   * min-length === false</code> otherwise.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */

  lacksMinLength(numberVariable) {
    validateType(numberVariable, NumberVariable)

    const characterCount = new NumberVariable(
      `number-of-characters`,
      this.value.length
    )
    return characterCount.greaterThanOrEqualTo(numberVariable)
  }


  matches(regexVariable) {
    validateType(regexVariable.value, RegExp)

    const value = Array.isArray(this.value.match(regexVariable.value))
    return new Proposition(
      `(${this.name} MATCHES ${regexVariable.value})`,
      value
    )
  }

  /**
   * Determines whether this StringVariable's <code>value</code> property starts
   * with the characters of another StringVariable, returning <code>true</code>
   * or <code>false</code> as appropriate.
   *
   * @method startsWith
   * @param {archetypes.rules.StringVariable} stringVariable - The variable to
   * compare
   * @returns {archetypes.rules.Proposition} A new Proposition with the value of
   * <code>true</code> if the given characters are found at the start of the
   * string, including when stringVariable.value is an empty string; otherwise,
   * <code>false</code>.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */
  startsWith(stringVariable) {
    validateType(stringVariable, StringVariable)

    const value = this.value.startsWith(stringVariable.value)
    return new Proposition(
      `(${this.name} STARTS_WITH "${stringVariable.value}")`,
      value
    )
  }

  /**
   * Return the primitive value.
   *
   * @override
   * @method valueOf
   * @returns {string} This StringVariable's value.
   * @memberof archetypes.rules.StringVariable
   * @instance
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const variable = new StringVariable(name)
    variable.value = null
    return variable
  }
}

export default StringVariable

import is from '@sindresorhus/is'
import camelCase from 'camelcase'
import ow from 'ow'
import assignTypeTo from '../helpers/assign-type-to'
import typeInspector from '../type-inspector/type-inspector'
import validOperators from './valid-operators.json' with { type: 'json' }

/**
 * @interface
 * @inner
 * @name defaultOptions
 * @property {boolean} [throws = true] Whether to throw an <code>Error</code> if
 * the Operator evaluates to <code>true</code>.
 */
const defaultOptions = {
  throws: true
}

/**
 * (Boolean) <code>Operator</code>s represent specific words, symbols, or
 * logical connectors used to combine, narrow, or broaden search parameters in
 * databases, search engines, and programming.  They function by establishing
 * relationships between keywords or conditions to produce a precise set of
 * results or a <code>true</code>/<code>false</code> value.
 * @memberof archetypes.rules
 * @extends archetypes.rules.RuleElement
 * @property {string} name - The name of the archetypes.rules.Operator
 * @property {('AFTER' | 'AND' | 'BEFORE' | 'CONFORMS_TO' | 'ENDS_WITH' | 'EQ' |
 * 'EQUAL_TO' | 'EVERY' | 'EXCEEDS_MAX_LENGTH' | 'GREATER_THAN_OR_EQUAL_TO' |
 * 'GREATER_THAN' | 'GT' | 'GTE' | 'HAS_IN' | 'HAS' | 'INCLUDES' |
 * 'INCLUDES_ANY' | 'IS_EMPTY' | 'IS_NOT_EMPTY' | 'IS_ONE_OF' |
 * 'LACKS_MIN_LENGTH' | 'LESS_THAN_OR_EQUAL_TO' | 'LESS_THAN' | 'LT' | 'LTE' |
 * 'MATCH' | 'MATCHES' | 'NEQ' | 'NOT_EQUAL_TO' | 'NOT' | 'OR' | 'SOME' |
 * 'STARTS_WITH' | 'XOR')} value - The value of the archetypes.rules.Operator
 * @property {string} [type = "archetypes.rules.Operator"] - The (fully
 * namespaced) canonical name of this Operator.
 */
class Operator {
  /**
   * Create a new Operator.
   * @param {string} name - The name of the boolean Operator.
   * @param {defaultOptions} [options = defaultOptions]
   * @param {boolean} [options.throws = true] Whether to throw an error when an
   * <code>Operator<wbr>.prototype<wbr>.name</code> is invalid.
   */
  constructor(name, options = defaultOptions) {
    Operator.isValid(name, options)
    this.name = name
    assignTypeTo(this)
  }

  /**
   * Converts a method name to camel case.
   * @returns {string} The name of the method/operation as camelCase
   * @example
   *
   * import { Operator } from 'archetypes-rules'
   *
   * const or = new Operator('GREATER_THAN_OR_EQUAL_TO')
   * console.log(or.toOperationName())
   * // => greaterThanOrEqualTo
   *
   */
  toOperationName() {
    return camelCase(this.toString())
  }

  /**
   * @returns {string} The name of the Operator.
   */
  toString() {
    return this.name
  }

  /**
   * Create a new Operator by name or by passing another Operator instance.
   * @param {(string|Operator.prototype)} nameOrOperator The Operator to
   * (re)create
   * @param {defaultOptions} [options = defaultOptions] Behavioral options for
   * <code>Operators</code>.
   * @param {boolean} [options.throws = true] Whether to throw an error when an
   * <code>Operator<wbr>.prototype<wbr>.name</code> is invalid.
   * @return {Operator} A new <code>Operator</code> instance.
   */
  static factory(nameOrOperator, options = defaultOptions) {
    if (is.string(nameOrOperator)) {
      return new Operator(nameOrOperator, options)
    }
    return nameOrOperator
  }

  /**
   * Determine whether an object is an Operator instance.
   * @param {RuleElement} ruleElement - Either an Operator, Proposition, or
   * Variable
   * @returns {boolean}
   */
  static isOperator(ruleElement) {
    return ruleElement.type === typeInspector.OPERATOR
  }

  static isValid(
    name,
    options = {
      throws: false
    }
  ) {
    if (options.throws) {
      ow(name, ow.string.oneOf(validOperators))
    }
    return validOperators.includes(name)
  }

  valueOf() {
    return this.toString()
  }
}

export default Operator

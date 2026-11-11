import is from '@sindresorhus/is'
import get from 'lodash.get'
import ow from 'ow'
import createRuleElementName from '../helpers/create-rule-element-name'
import RuleElement from '../rule-element/rule-element'
import typeInspector from '../type-inspector/type-inspector'

/**
 * A (boolean) <code>Proposition</code> is a declarative statement or sentence
 * that has a distinct truth value of either <code>true</code> or
 * <code>false</code>, but not both.
 * @extends archetypes.rules.RuleElement
 * @memberof archetypes.rules
 * @property {string} name - The name of the archetypes.rules.Proposition
 * @property {boolean} value - The value of the archetypes.rules.Proposition
 * @property {string} [type = "archetypes.rules.Proposition"] - The (fully
 * namespaced) canonical name of this Proposition.
 */
class Proposition extends RuleElement {
  /**
   * Create a new <code>Proposition</code>.
   * @param {string} name - A word, statement, or sentence.
   * @param {boolean} value - Whether the <code>name</code> is <code>true</code>
   * or <code>false</code>.
   */
  constructor(name, value) {
    super(name, value, ow.boolean)
  }

  /**
   * Boolean logical AND is a fundamental operator in Boolean algebra that
   * returns true only if both of its operands are true; otherwise, the result
   * is false.
   * @param {archetypes.rules.Proposition} proposition - Another proposition to
   * evaluate.
   * @return {archetypes.rules.Proposition} A new <code>Proposition</code>
   * expressing the result of the evaluation with another proposition.
   * @example
   *
   * import { Proposition } from 'archetypes-rules'
   *
   * const humanMortality   = new Proposition( 'allHumansAreMortal', true )
   * const socratesIsHuman  = new Proposition( 'socratesIsHuman', true )
   * const socratesIsMortal = humanMortality.and(socratesIsHuman)
   *
   * console.log(`${socratesIsMortal}`)
   * // => Proposition: (allHumansAreMortal AND socratesIsHuman), value: true
   *
   */
  and(proposition) {
    const value = this.value && proposition.value
    return Proposition.factory(this, value, proposition, 'AND')
  }

  /**
   * Boolean Logical NOT (also known as negation or logical complement) is a
   * unary logical operator that inverts the truth value of its single operand.
   * @return {archetypes.rules.Proposition} A new <code>Proposition</code> with
   * the original <code>Proposition</code>'s value negated.
   * @example
   *
   * import { Proposition } from 'archetypes-rules'
   *
   * const socratesIsHuman    = new Proposition(
   *   'socratesIsHuman', true
   * )
   *
   * console.log(socratesIsHuman)
   * // => Proposition: (socratesIsHuman), value: true
   * console.log(socratesIsHuman.not())
   * // => Proposition: (NOT socratesIsHuman), value: false
   *
   *
   */
  not() {
    return new Proposition(`(NOT ${this.name})`, !this.value)
  }

  /**
   * Boolean logical OR is an operator that returns <code>true</code> if at
   * least one of its operands is <code>true</code>, and <code>false</code> only
   * if both operands are <code>false</code>. It is an inclusive operation,
   * meaning it evaluates to <code>true</code> even if both inputs are
   * <code>true</code>.
   * @param {archetypes.rules.Proposition} proposition - Another
   * <code>Proposition</code> to compare against.
   * @return {archetypes.rules.Proposition} A new Proposition that declares the
   * result of the OR operation.
   * @example
   *
   * import { Propostion } from 'archetypes-rules'
   *
   * const bobIsMarried = new Propostion('Bob is married', false)
   * const bobIsSingle  = new Propostion('Bob is single', true)
   *
   * console.log(bobIsMarried.or(bobIsSingle))
   * // => Proposition: (Bob is married OR Bob is single), value: true
   *
   */
  or(proposition) {
    const value = this.value || proposition.value
    return Proposition.factory(this, value, proposition, 'OR')
  }

  /**
   * Boolean logical XOR (exclusive OR) is a logical operator that returns
   * <code>true</code> if and only if exactly one of its two operands is
   * <code>true</code>, but not both.  It acts as a <em>difference
   * detector</em>, meaning the output is <code>true</code> when the inputs have
   * different truth values and <code>false</code> when they are identical.
   * @param {archetypes.rules.Proposition} proposition - Another
   * <code>Proposition</code> to compare against.
   * @return {archetypes.rules.Proposition} A new Proposition that declares the
   * result of the XOR operation.
   */
  xor(proposition) {
    const value = !this.value !== !proposition.value
    return Proposition.factory(this, value, proposition, 'XOR')
  }

  /**
   * @override
   * @return {boolean} The value of the <code>Proposition.prototype.value</code>
   * property.
   */
  valueOf() {
    return this.value
  }

  /**
   * [Symbol.toPrimitive] is a well-known symbol in JavaScript that defines a
   * method for converting an object to a primitive value.  It takes precedence
   * over the traditional valueOf() and toString() methods during type coercion,
   * allowing developers to fully control how an object behaves in numeric,
   * string, or default contexts. See
   * {@link https://www.w3docs.com/learn-javascript/object-to-primitive-conversion "Understanding JavaScript's Object toPrimitive Conversion" }
   * for details.
   * @param {'number'|'string'|'default'} hint - Either 'number', 'string', or
   * 'default'
   * @return {(boolean|string)}
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.toString()
    }
    /* c8 ignore next */
    /* istanbul ignore next */
    /* v8 ignore next */
    return this.value
  }

  /**
   * A convenience method for generating a <code>Proposition</code> from another
   * evaluated <code>Proposition</code>.
   * @param {(string|archetypes.rules.Proposition)} proposition
   * @param {(*|undefined)} value
   * @param {archetypes.rules.Proposition} anotherProposition
   * @param {Operator} operator
   * @return {archetypes.rules.Proposition}
   */
  static factory(proposition, value, anotherProposition, operator) {
    if (is.string(proposition)) {
      return new Proposition(proposition, value)
    }
    const name = createRuleElementName(
      proposition,
      anotherProposition,
      operator
    )
    return new Proposition(name, value)
  }

  /**
   * Determine whether another object is a <code>RuleElement</code>.
   * @param {Object} ruleElement An object that might have
   * <code>RuleElement</code> in its prototype chain.
   * @return {boolean} <code>true</code> if the <code>ruleElement</code>
   * parameter is a prototype of {@linkcode archetypes.rules.RuleElement};
   * otherwise <code>false</code>.
   */
  static isProposition(ruleElement) {
    return get(ruleElement, 'type') === typeInspector.PROPOSITION
  }
}

export default Proposition

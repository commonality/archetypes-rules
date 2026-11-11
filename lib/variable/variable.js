import isEqual from 'lodash.isequal'
import ow from 'ow'
import Proposition from '../proposition/proposition'
import RuleElement from '../rule-element/rule-element'
import isVariable from './helpers/is-variable'

/**
 * A variable is a symbol that represents the value of something and can assume
 * any of a set of values.
 *
 * @abstract
 * @extends {archetypes.rules.RuleElement}
 * @memberof archetypes.rules
 * @param {string} name - A unique string that expresses intent.
 * @param {*} value - A JavaScript primitive or Object type.
 *
 * @property {string} name - The SymbolVariable's identifier.
 * @property {*} value - A primitive or Object.
 * @property {string} type - "archetypes.rules.Variable" @readonly
 */

class Variable extends RuleElement {
  // Quantifier methods

  /**
   * Evaluate whether the current variable's value is the same as another
   * variable's value.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} A unique evaluation with a
   * truth-value.
   */

  equalTo(variable) {
    const value = isEqual(this.value, variable.value)
    return Proposition.factory(this, value, variable, '===')
  }

  /**
   * A convenient alias method for {@link archetypes.rules.Variable#equalTo}.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} A unique evaluation with a
   * truth-value.
   */

  eq(variable) {
    return this.equalTo(variable)
  }

  /**
   * Evaluate whether the current Variable's value is greater than another
   * Variable's value.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */

  greaterThan(variable) {
    const value = this.value > variable.value
    return Proposition.factory(this, value, variable, '>')
  }

  /**
   * Alias for {@link archetypes.rules.Variable#greaterThan}.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */

  gt(variable) {
    return this.greaterThan(variable)
  }

  /**
   * Evaluate whether the current Variable's value is greater than or equal to
   * another variable's value.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  greaterThanOrEqualTo(variable) {
    const value = this.value >= variable.value
    return Proposition.factory(this, value, variable, '≥')
  }

 /**
   * Alias for {@link archetypes.rules.Variable#greaterThanOrEqualTo}.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  gte(variable) {
    return this.greaterThanOrEqualTo(variable)
  }

 /**
   * Evaluate whether the current Variable's value is less than another
   * Variable's value.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  lessThan(variable) {
    const value = this.value < variable.value
    return Proposition.factory(this, value, variable, '<')
  }

 /**
   * Alias for {@link archetypes.rules.Variable#lessThan}.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  lt(variable) {
    return this.lessThan(variable)
  }

 /**
   * Evaluate whether the current Variable's value is less than or equal to
   * another Variable's value.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  lessThanOrEqualTo(variable) {
    const value = this.value <= variable.value
    return Proposition.factory(this, value, variable, '⩽')
  }

 /**
   * Alias for {@link archetypes.rules.Variable#lessThanOrEqualTo}.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  lte(variable) {
    return this.lessThanOrEqualTo(variable)
  }

 /**
   * Evaluate whether the current Variable's value is NOT equal to another
   * Variable's value.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the qualifier
   * comparision.
   */
  notEqualTo(variable) {
    const value = this.value !== variable.value
    return Proposition.factory(this, value, variable, '≠')
  }

 /**
   * Alias for {@link archetypes.rules.Variable#notEqualTo}.
   *
   * @param {archetypes.rules.Variable} variable - Another variable to be
   * compared.
   * @returns {archetypes.rules.Proposition} The result of the quantifier
   * comparision.
   */
  neq(variable) {
    return this.notEqualTo(variable)
  }

 /**
  * Determine whether an Object is a <code>Variable</code>.
  *
  * @param {Object} ruleElement - Any object that may have <code>Variable</code>
  * in its prototypal chain.
  * @return {archetypes.rules.Proposition} Whether the <code>ruleElement</code>
  * parameter is a prototype of <code>Variable</code>.
  */
  static isVariable(ruleElement) {
    return isVariable(ruleElement)
  }

 /**
  * Create a <code>NullVariable</code> object, i.e., a <code>Variable</code>
  * with the value of <code>null</code>.
  *
  * @return {archetypes.rules.Variable} A new Variable with the property
  * <code>value</code> = <code>null</code>.
  */
  static createNullObject(name) {
    return new Variable(name, null, ow.null)
  }
}

export default Variable

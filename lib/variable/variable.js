const isEqual = require('lodash.isequal')
const isVariable = require('./helpers/is-variable')
const ow = require('ow')
const Proposition = require('../proposition/proposition')
const RuleElement = require('../rule-element')

/**
 * @classdesc
 * A variable is a symbol that represents the value of something and can assume
 * any of a set of values.
 *
 * @abstract
 * @class Variable
 * @extends {RuleElement}
 * @param {string} name - A unique string that expresses intent.
 * @param {*} value - A JavaScript primitive or Object type.
 */

class Variable extends RuleElement {
  // Quantifier methods

  /**
   * Evaluate whether the current variable's value is the same as another
   * variable's value.
   *
   * @param {Variable} variable - Another variable to be compared.
   * @returns {Proposition} - A unique evaluation with a truth-value.
   * @memberof Variable
   */

  equalTo (variable) {
    const value = isEqual(this.value, variable.value)
    return Proposition.factory(this, value, variable, '===')
  }

  /**
   * A convenient alias method for equalTo.
   *
   * @see {@link Variable.prototype.equalTo}
   * @memberof Variable
   */

  eq (variable) {
    return this.equalTo(variable)
  }

  /**
   * Evaluate whether the current Variable's value is greater than
   * another Variable's value.
   *
   * @param {*} variable
   * @returns {Proposition} - The result of the quantifier comparision.
   * @memberof Variable
   */

  greaterThan (variable) {
    const value = this.value > variable.value
    return Proposition.factory(this, value, variable, '>')
  }

  /**
   * Alias for Variable.prototype.greaterThan.
   *
   * @see {@link Variable.prototype.greaterThan}
   * @memberof Variable
   */

  gt (variable) {
    return this.greaterThan(variable)
  }

  greaterThanOrEqualTo (variable) {
    const value = this.value >= variable.value
    return Proposition.factory(this, value, variable, '>=')
  }

  gte (variable) {
    return this.greaterThanOrEqualTo(variable)
  }

  lessThan (variable) {
    const value = this.value < variable.value
    return Proposition.factory(this, value, variable, '<')
  }

  lt (variable) {
    return this.lessThan(variable)
  }

  lessThanOrEqualTo (variable) {
    const value = this.value <= variable.value
    return Proposition.factory(this, value, variable, '<=')
  }

  lte (variable) {
    return this.lessThanOrEqualTo(variable)
  }

  notEqualTo (variable) {
    const value = this.value !== variable.value
    return Proposition.factory(this, value, variable, '!==')
  }

  neq (variable) {
    return this.notEqualTo(variable)
  }

  static isVariable (ruleElement) {
    return isVariable(ruleElement)
  }

  static createNullObject (name) {
    return new Variable(name, null, ow.null)
  }
}

module.exports = Variable

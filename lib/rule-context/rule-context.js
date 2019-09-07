const assignTypeTo = require('../helpers/assign-type-to')
const definePropertyLength = require('../helpers/define-property-length')
const get = require('lodash.get')
const getName = require('./helpers/get-name')
const Proposition = require('../proposition/proposition')
const set = require('lodash.set')
const variableFactory = require('../variable/variable-factory')

/**
 * @classdesc
 * Contains the informational context for the execution of a Rule.
 * RuleContexts represent this information as a Map of
 * RuleElements, namely, Propositions and Variables.
 *
 * ⚠️ Note: RuleContexts do not contain Operators.
 *
 * @class RuleContext
 * @param {string} name - A unique, preferably canonical,
 * identifier for the RuleContext.
 * @property {string} name - A unique, preferably canonical,
 * identifier for the RuleContext.
 * @property {Object.<RuleElement>} elements - A collection of Propositions
 * and variables, but _not_ Operators.
 * @property {Object.<RuleOverride>} overrides - A collection of RuleOverrides.
 * @property {string} type - @archetypes/rules/RuleContext.
 */

class RuleContext {
  constructor (name) {
    this.name = name
    this.elements = {
    }
    definePropertyLength(this.elements)
    this.overrides = {
    }
    definePropertyLength(this.overrides)
    assignTypeTo(this)
  }

  /**
   * Add a Proposition to the RuleElement's elements Map.
   *
   * @param {string} name - A human-parsable name for a true/false statement.
   * @param {boolean} value - The truth value for the statement.
   * @returns {RuleElement} - A reference to the RuleElement instance
   * for method-chaining.
   * @memberof RuleContext
   */

  addProposition (name, value) {
    set(this.elements, name, new Proposition(name, value))
    return this
  }

  /**
   * Add a RuleOverride.
   *
   * @param {RuleOverride} ruleOverride - A RuleOverride.
   * @returns {RuleContext} - Reference to itself of method-chaining.
   * @memberof RuleContext
   */

  addRuleOverride (ruleOverride) {
    set(this.overrides, ruleOverride.ruleName, ruleOverride)
    return this
  }

  /**
   * Add a Variable (or Variable sub-type) to the RuleContext.
   * ℹ️ The RuleElement will create a new Variable sub-type by
   * inferring type from the value.
   *
   * @param {string} name
   * @param {*} value
   * @returns {RuleElement} - Reference to the RuleContext instance.
   * @memberof RuleContext
   */

  addVariable (name, value) {
    const variable = variableFactory(name, value)
    set(this.elements, name, variable)
    return this
  }

  append (ruleContext) {
    Object.assign(this.elements, ruleContext.elements)
    return this
  }

  /**
   * Search for and return a RuleElement from the RuleContext instance's
   * elements Map.
   *
   * @param {string} name
   * @returns {RuleElement|null} - Either a RuleElement or null.
   * @memberof RuleContext
   */

  findElement (element) {
    const name = getName(element)
    return get(this.elements, name)
  }

  /**
   * Look for and return a RuleOverride by name.
   *
   * @param {RuleOverride|string} item - The name of the RuleOverride.
   * @returns {RuleOverride|undefined} - A RuleOverride (if it exists);
   * undefined, otherwise.
   * @memberof RuleContext
   */

  findRuleOverride (item) {
    const name = getName(item)
    return get(this.overrides, name)
  }
}

module.exports = RuleContext

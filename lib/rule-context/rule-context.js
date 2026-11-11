import get from 'lodash.get'
import assignTypeTo from '../helpers/assign-type-to'
import definePropertyLength from '../helpers/define-property-length'
import Proposition from '../proposition/proposition'
import variableFactory from '../variable/variable-factory'
import getName from './helpers/get-name'

/**
 * @classdesc
 * Contains the informational context for the execution of a Rule. RuleContexts
 * represent this information as a Map of RuleElements, namely, Propositions and
 * Variables.
 *
 * ⚠️ Note: RuleContexts do not contain Operators.
 *
 * @class archetypes.rules.RuleContext
 * @memberof archetypes.rules
 * @param {string} name - A unique, preferably canonical, identifier for the
 * RuleContext.
 * @property {string} name - A unique, preferably canonical, identifier for the
 * RuleContext.
 * @property {Object.<RuleElement>} elements - A collection of Propositions and
 * variables, but _not_ Operators.
 * @property {Object.<RuleOverride>} overrides - A collection of RuleOverrides.
 * @property {string} type - archetypes.rules.RuleContext.
 */

class RuleContext {
  constructor(name) {
    this.name = name
    this.elements = {}
    definePropertyLength(this.elements)
    this.overrides = {}
    definePropertyLength(this.overrides)
    assignTypeTo(this)
  }

  /**
   * Add a Proposition to the RuleElement's elements Map.
   *
   * @method addProposition
   * @param {string} name - A human-parsable name for a true/false statement.
   * @param {boolean} value - The truth value for the statement.
   * @returns {archetypes.rules.RuleElement} A reference to the RuleElement
   * instance for method-chaining.
   * @memberof archetypes.rules.RuleContext
   */

  addProposition(name, value) {
    this.elements[name] = new Proposition(name, value)
    return this
  }

  /**
   * Add a RuleOverride.
   *
   * @method addRuleOverride
   * @param {archetypes.rules.RuleOverride} ruleOverride - A RuleOverride.
   * @returns {archetypes.rules.RuleContext} - Reference to itself of
   * method-chaining.
   * @memberof archetypes.rules.RuleContext
   * @return {this} Reference to the instance.
   */

  addRuleOverride(ruleOverride) {
    this.overrides[ruleOverride.ruleName] = ruleOverride
    return this
  }

  /**
   * Add a Variable (or Variable sub-type) to the RuleContext. ℹ️ The
   * RuleElement will create a new Variable sub-type by inferring type from the
   * value.
   *
   * @method addVariable
   * @param {string} name
   * @param {*} value
   * @returns {archetypes.rules.RuleElement} Reference to the RuleContext
   * instance.
   * @memberof archetypes.rules.RuleContext
   */

  addVariable(name, value) {
    const variable = variableFactory(name, value)
    this.elements[name] = variable
    return this
  }

  /**
   * Add the members of an archetypes.rules.RuleContext.proptotype.elements to
   * this archetypes.rules.RuleContext.
   *
   * @method append
   * @param {archetypes.rules.RuleContext} ruleContext - Another
   * archetypes.rules.RuleContext whose Array<archetypes.rules.RuleElement> you
   * want to incorporate.
   * @returns {archetypes.rules.RuleElement} Reference to the RuleContext
   * instance.
   * @memberof archetypes.rules.RuleContext
   */
  append(ruleContext) {
    Object.assign(this.elements, ruleContext.elements)
    return this
  }

  /**
   * Search for and return a RuleElement from the RuleContext instance's
   * elements Map.
   *
   * @method findElement
   * @param {string} name
   * @returns {archetypes.rules.RuleElement|null} Either a
   * archetypes.rules.RuleElement or null.
   * @memberof archetypes.rules.RuleContext
   */

  findElement(element) {
    const name = getName(element)
    return get(this.elements, name)
  }

  /**
   * Look for and return a RuleOverride by name.
   *
   * @method findRuleOverride
   * @param {archetypes.rules.RuleOverride|string} item - The name of the
   * RuleOverride.
   * @returns {archetypes.rules.RuleOverride|undefined} - A RuleOverride (if it
   * exists) undefined, otherwise.
   * @memberof archetypes.rules.RuleContext
   */

  findRuleOverride(item) {
    const name = getName(item)
    return get(this.overrides, name)
  }
}

export default RuleContext

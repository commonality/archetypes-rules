import { isString } from 'es-toolkit/predicate'
import ow from 'ow'
import assignTypeTo from '../helpers/assign-type-to'
import definePropertyLength from '../helpers/define-property-length'
import Proposition from '../proposition/proposition'
import RuleElement from '../rule-element/rule-element'
import RuleOverride from '../rule-override/rule-override'

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
 * @param {String} name - A unique, preferably canonical, identifier for the
 * RuleContext.
 * @property {String} name - A unique, preferably canonical, identifier for the
 * RuleContext.
 * @property {Object.<RuleElement>} elements - A collection of Propositions and
 * variables, but _not_ Operators.
 * @property {Object.<RuleOverride>} overrides - A collection of RuleOverrides.
 * @property {String} type - archetypes.rules.RuleContext.
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
   * @param {(archetypes.rules.Proposition|String)} name - A human-parsable name
   * for a true/false statement.
   * @param {boolean} value - The truth value for the statement.
   * @returns {archetypes.rules.RuleElement} A reference to the RuleElement
   * instance for method-chaining.
   * @memberof archetypes.rules.RuleContext
   */

  addProposition(name, value) {
    ow(name, ow.any(ow.object.instanceOf(Proposition), ow.string))
    if (isString(name)) {
      this.elements[name] = new Proposition(name, value)
    } else {
      const proposition = { ...name }
      this.elements[proposition.name] = proposition
    }
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
    ow(
      ruleOverride,
      ow.any(
        ow.object.instanceOf(RuleOverride),
        ow.boolean.is(this.name === ruleOverride.ruleName)
      )
    )
    this.overrides[ruleOverride.ruleName] = ruleOverride
    return this
  }

  /**
   * Add a Variable (or Variable sub-type) to the RuleContext. ℹ️ The
   * RuleElement will create a new Variable sub-type by inferring type from the
   * value.
   *
   * @method addVariable
   * @param {String} name
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
   * @param {String} name
   * @returns {archetypes.rules.RuleElement|null} Either a
   * archetypes.rules.RuleElement or undefined.
   * @memberof archetypes.rules.RuleContext
   */

  findElement(element) {
    const name = getName(element)
    if (Object.hasOwn(this.elements, name)) {
      return this.elements[name]
    }
    return undefined
  }

  /**
   * Look for and return a RuleOverride by name.
   *
   * @method findRuleOverride
   * @param {(archetypes.rules.RuleOverride|string)} item - The name of the
   * RuleOverride.
   * @returns {(archetypes.rules.RuleOverride|undefined)} - A RuleOverride (if
   * it exists) undefined, otherwise.
   * @memberof archetypes.rules.RuleContext
   */

  findRuleOverride(item) {
    const name = getName(item)
    if (Object.hasOwn(this.overrides, name)) {
      return this.overrides[name]
    }
    return undefined
  }
}

export default RuleContext

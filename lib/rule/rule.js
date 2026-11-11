import is from '@sindresorhus/is'
import ow from 'ow'
import assignTypeTo from '../helpers/assign-type-to'
import Operator from '../operator/operator'
import Proposition from '../proposition/proposition'
import RuleContext from '../rule-context/rule-context'
import Variable from '../variable/variable'
import variableFactory from '../variable/variable-factory'
import isPropositionOrVariable from './helpers/is-proposition-or-variable'
import overrideRule from './helpers/override-rule'
import process from './helpers/process'

/**
 * Represents explicit operational constraints.
 *
 * @extends {Object}
 * @property {string} name - The unique, namespaced moniker for the Rule.
 * @property {Array<RuleElement>} elements - An array of RuleElements.
 * @property {string} type - archetypes.rules.Rule
 * @memberof archetypes.rules
 */

class Rule {
  /**
   * Create a new Rule.
   *
   * @constructor
   * @param {string} name - The unique, namespaced moniker for the Rule.
   * @memberof archetypes.rules.Rule
   */
  constructor(name) {
    this.name = name
    this.elements = []
    assignTypeTo(this)
  }

  /**
   * Add an Operator to the Rule's elements array.
   *
   * @method addOperator
   * @param {archetypes.rules.Operator|string} element - An Operator instance or
   * valid operator name.
   * @returns {archetypes.rules.Rule} - Reference to the Rule instance (for
   * method chaining).
   * @memberof archetypes.rules.Rule
   * @instance
   */

  addOperator(element) {
    ow(element, ow.any(ow.object.instanceOf(Operator), ow.string))
    this.elements.push(Operator.factory(element))
    return this
  }

  /**
   * Add a Proposition to the Rule's elements array.
   * @memberof archetypes.rules.Rule
   * @method addProposition
   * @instance
   *
   * @param {archetypes.rules.Proposition|string} element - Reference to a
   * Proposition or a statement.
   * @param {boolean} [value=false] - The Proposition's truth-value.
   * @returns {archetypes.rules.Rule} - Reference to the Rule instance (for
   * method chaining).
   */

  addProposition(element, value = false) {
    ow(element, ow.any(ow.object.instanceOf(Proposition), ow.string))

    this.elements.push(Proposition.factory(element, value))
    return this
  }

  /**
   * Add a Variable to the Rule's elements array.
   * @memberof archetypes.rules.Rule
   * @method addVariable
   * @instance
   *
   * @param {archetypes.rules.Variable|string} element - Reference to a Variable
   * or the variable's name.
   * @param {*} [value=null] - The variable's value.
   * @returns {archetypes.rules.Rule} - Reference to the Rule instance (for
   * method chaining).
   */

  addVariable(element, value = null) {
    ow(element, ow.any(ow.object.instanceOf(Variable), ow.string))
    this.elements.push(variableFactory(element, value))
    return this
  }

  /**
   * Determine whether a RuleContext (aka "Fact") complies with this Rule
   * instance.
   * @memberof archetypes.rules.Rule
   * @method evaluate
   * @instance
   *
   * @param {archetypes.rules.RuleContext} ruleContext - A Fact to be evaluated
   * for compliance.
   * @returns {archetypes.rules.Proposition} - A new Proposition that state
   * whether the RuleContext complies with the Rule.
   */

  evaluate(ruleContext) {
    ow(ruleContext, ow.object.instanceOf(RuleContext))
    this.elements.forEach(element => {
      const ruleElement = ruleContext.findElement(element)
      if (isPropositionOrVariable(ruleElement)) {
        if (is.null(ruleElement.value)) {
          ruleElement.value = element.value
        }
        element.value = ruleElement.value
      }
    })
    const proposition = process(this.elements)
    return overrideRule(this.name, ruleContext, proposition)
  }
}

export default Rule

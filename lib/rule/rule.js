const assignTypeTo = require('../helpers/assign-type-to')
const isNull = require('lodash.isnull')
const isPropositionOrVariable = require('./helpers/is-proposition-or-variable')
const Operator = require('../operator/operator')
const Proposition = require('../proposition/proposition')
const RuleContext = require('../rule-context/rule-context')
const Variable = require('../variable/variable')
const overrideRule = require('./helpers/override-rule')
const ow = require('ow')
const process = require('./helpers/process')
const variableFactory = require('../variable/variable-factory')

/**
 * @classdesc
 * Represents explicit operational constraints.
 *
 * @class Rule
 * @property {string} name - The unique, namespaced moniker for the Rule.
 * @property {Array<RuleElement>} elements - An array of RuleElements.
 * @property {string} type - archetypes.rules.Rule
 *
 * @param {string} name - The unique, namespaced moniker for the Rule.
 */

class Rule {
  constructor (name) {
    this.name = name
    this.elements = []
    assignTypeTo(this)
  }

  /**
   * Add an Operator to the Rule's elements array.
   *
   * @param {Operator|string} element - An Operator instance or valid
   * operator name.
   * @returns {Rule} - Reference to the Rule instance (for method chaining).
   * @memberof Rule
   */

  addOperator (element) {
    ow(element, ow.any(ow.object.instanceOf(Operator), ow.string))
    this.elements.push(Operator.factory(element))
    return this
  }

  /**
   * Add a Proposition to the Rule's elements array.
   *
   * @param {Proposition|string} element - Reference to a Proposition
   * or a statement.
   * @param {boolean} [value=false] - The Proposition's truth-value.
   * @returns {Rule} - Reference to the Rule instance (for method chaining).
   * @memberof Rule
   */

  addProposition (element, value = false) {
    ow(element, ow.any(ow.object.instanceOf(Proposition), ow.string))

    this.elements.push(Proposition.factory(element, value))
    return this
  }

  /**
   * Add a Variable to the Rule's elements array.
   *
   * @param {Variable|string} element - Reference to a Variable or the
   * variable's name.
   * @param {*} [value=null] - The variable's value.
   * @returns {Rule} - Reference to the Rule instance (for method chaining).
   * @memberof Rule
   */

  addVariable (element, value = null) {
    ow(element, ow.any(ow.object.instanceOf(Variable), ow.string))
    this.elements.push(variableFactory(element, value))
    return this
  }

  /**
   * Determine whether a RuleContext (aka "Fact") complies with this
   * Rule instance.
   *
   * @param {RuleContext} ruleContext - A Fact to be evaluated for compliance.
   * @returns {Proposition} - A new Proposition that state whether the
   * RuleContext complies with the Rule.
   * @memberof Rule
   */

  evaluate (ruleContext) {
    ow(ruleContext, ow.object.instanceOf(RuleContext))
    this.elements.forEach((element) => {
      const ruleElement = ruleContext.findElement(element)
      if (isPropositionOrVariable(ruleElement)) {
        if (isNull(ruleElement.value)) {
          ruleElement.value = element.value
        }
        element.value = ruleElement.value
      }
    })
    const proposition = process(this.elements)
    return overrideRule(this.name, ruleContext, proposition)
  }
}

module.exports = Rule

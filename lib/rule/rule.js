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

class Rule {
  constructor (name) {
    this.name = name
    this.elements = []
    assignTypeTo(this)
  }

  addOperator (element) {
    ow(element, ow.any(
      ow.object.instanceOf(Operator),
      ow.string
    ))
    this.elements.push(Operator.factory(element))
    return this
  }

  addProposition (element, value = false) {
    ow(element, ow.any(
      ow.object.instanceOf(Proposition),
      ow.string
    ))

    this.elements.push(Proposition.factory(element, value))
    return this
  }

  addVariable (element, value = null) {
    ow(element, ow.any(
      ow.object.instanceOf(Variable),
      ow.string
    ))
    this.elements.push(variableFactory(element, value))
    return this
  }

  evaluate (ruleContext) {
    ow(ruleContext, ow.object.instanceOf(RuleContext))
    this.elements.forEach((element) => {
      if (isPropositionOrVariable(element)) {
        const ruleElement = ruleContext.findElementByName(element.name)
        if (ruleElement) {
          if (isNull(ruleElement.value)) {
            ruleElement.value = element.value
          } else if (isNull(element.value)) {
            element.value = ruleElement.value
          }
          element.value = ruleElement.value
        }
      }
    })
    const proposition = process(this.elements)
    return overrideRule(this.name, ruleContext, proposition)
  }
}

module.exports = Rule

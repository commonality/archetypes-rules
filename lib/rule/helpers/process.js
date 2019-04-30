const {isOperator} = require('../../operator/operator')
const isPropositionOrVariable = require('./is-proposition-or-variable')
const InvalidRuleElementError = require('../../invalid-rule-element-error')
const processOperator = require('./process-operator')
const processRuleElement = require('./process-rule-element')

const process = (elements) => {
  const stack = []
  for (let ruleElement of elements) {
    if (isOperator(ruleElement)) {
      processOperator(stack, ruleElement)
    } else if (isPropositionOrVariable(ruleElement)) {
      processRuleElement(stack, ruleElement)
    } else {
      throw new InvalidRuleElementError(
        `Unknown RuleElement type "${ruleElement.toString()}".`
      )
    }
  }
  return stack.shift()
}

module.exports = process

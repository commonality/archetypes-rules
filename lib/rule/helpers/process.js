/* eslint-disable-next-line max-len */
import InvalidRuleElementError from '../../errors/invalid-rule-element-error'
import Operator from '../../operator/operator'
import isPropositionOrVariable from './is-proposition-or-variable'
import processOperator from './process-operator'
import processRuleElement from './process-rule-element'

const process = elements => {
  const stack = []
  for (const ruleElement of elements) {
    if (Operator.isOperator(ruleElement)) {
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

export default process

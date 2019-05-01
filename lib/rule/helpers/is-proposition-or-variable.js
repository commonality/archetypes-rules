const is = require('@sindresorhus/is')
const { isProposition } = require('../../proposition/proposition')
const { isVariable } = require('../../variable/variable')

const isPropositionOrVariable = (ruleElement) => {
  return !is.nullOrUndefined(ruleElement) && (
    isProposition(ruleElement) || isVariable(ruleElement)
  )
}

module.exports = isPropositionOrVariable

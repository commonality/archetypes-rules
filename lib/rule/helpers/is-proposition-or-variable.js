const {
  isValid,
  nullOrUndefined
} = require('ow')
const { isProposition } = require('../../proposition/proposition')
const { isVariable } = require('../../variable/variable')

const isPropositionOrVariable = (ruleElement) => {
  return !isValid(ruleElement, nullOrUndefined) && (
    isProposition(ruleElement) || isVariable(ruleElement)
  )
}

module.exports = isPropositionOrVariable

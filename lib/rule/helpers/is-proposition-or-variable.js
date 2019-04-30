const isNil = require('lodash.isnil')
const { isProposition } = require('../../proposition/proposition')
const { isVariable } = require('../../variable/variable')

const isPropositionOrVariable = (ruleElement) => {
  return !isNil(ruleElement) && (
    isProposition(ruleElement) || isVariable(ruleElement)
  )
}

module.exports = isPropositionOrVariable

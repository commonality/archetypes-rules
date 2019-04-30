const isPropositionOrVariable = require('../is-proposition-or-variable')
const Proposition = require('../../../proposition/proposition')
const variableFactory = require('../../../variable/variable-factory')

describe('isPropositionOrVariable', () => {
  describe('evaluates whether an argument is a', () => {
    test('archetypes.rules.Proposition', () => {
      const arg = new Proposition('p', true)
      expect(isPropositionOrVariable(arg)).toBe(true)
    })
    test('archetypes.rules.Variable', () => {
      const arg = variableFactory('array-variable', [])
      expect(isPropositionOrVariable(arg)).toBe(true)
    })
    test('something other than a Proposition or Variable', () => {
      const arg = {
      }
      expect(isPropositionOrVariable(arg)).toBe(false)
    })
  })
})

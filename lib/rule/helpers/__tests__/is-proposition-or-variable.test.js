import Proposition from '../../../proposition/proposition'
import variableFactory from '../../../variable/variable-factory'
import isPropositionOrVariable from '../is-proposition-or-variable'

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
      const arg = {}
      expect(isPropositionOrVariable(arg)).toBe(false)
    })
  })
})

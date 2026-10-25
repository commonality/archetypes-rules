/* eslint-disable max-len */
import { jest } from '@jest/globals'
import InvalidRuleElementError from '../../../errors/invalid-rule-element-error'
import Operator from '../../../operator/operator'
import operatorType from '../../../operator/operator-type'
import Proposition from '../../../proposition/proposition'
import variableFactory from '../../../variable/variable-factory'
import process from '../process'
import prohibitedExtensions from './__fixtures__/prohibited-extensions.json' with {
  type: 'json'
}

jest.mock('../process-operator')
jest.mock('../process-rule-element')

describe('process', () => {
  let elements = []
  const committerAllowedAccess = new Proposition(
    'committer-allowed-access',
    true
  )
  const committerHasAccess = new Proposition('committer-allowed-access', true)
  const prohibitedFileExtensions = variableFactory('prohibited-extensions', [
    ...prohibitedExtensions
  ])

  const pushedFileExtension = variableFactory('current-file-extension', '.asc')
  const includes = new Operator(operatorType.INCLUDES)
  const and = new Operator(operatorType.AND)

  describe('delegates evaluation of ruleElements in a Rule', () => {
    let spy = null

    beforeEach(() => {
      spy = null
    })

    afterEach(() => {
      if (spy) {
        spy.mockRestore()
      }
    })

    afterAll(() => {
      elements = []
    })

    describe('when given a Proposition', () => {
      it('pushes the Proposition to a stack', () => {
        elements.push(committerAllowedAccess)
        elements.push(committerHasAccess)
        const elem = process(elements)
        expect(elem).toBeDefined()
      })
    })

    describe('when given a Variable', () => {
      it('pushes the Proposition to a stack', () => {
        elements.push(prohibitedFileExtensions)
        elements.push(pushedFileExtension)
        const elem = process(elements)
        expect(elem).toBeDefined()
      })
    })

    describe('when given an Operator', () => {
      it('pushes the Operator to a stack', () => {
        elements.push(includes)
        elements.push(and)
        const elem = process(elements)
        expect(elem).toBeDefined()
      })
    })

    describe('when given something other than a RuleElement', () => {
      it('throws an InvalidRuleElementError', () => {
        expect(() => {
          elements.push('a primitive value')
          process(elements)
        }).toThrow(InvalidRuleElementError)
      })
    })
  })
})

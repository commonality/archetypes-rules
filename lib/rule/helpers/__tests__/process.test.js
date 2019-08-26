/* eslint-disable max-len,max-lines-per-function */

const InvalidRuleElementError = require('../../../errors/invalid-rule-element-error')
const Operator = require('../../../operator/operator')
const operatorType = require('../../../operator/operator-type')
const process = require('../process')
const processOperator = require('../process-operator')
const processRuleElement = require('../process-rule-element')

const prohibitedExtensions = require('./__fixtures__/prohibited-extensions.json')
const Proposition = require('../../../proposition/proposition')
const variableFactory = require('../../../variable/variable-factory')

jest.mock('../process-operator')
jest.mock('../process-rule-element')

describe('process', () => {
  let elements = []
  const committerAllowedAccess =
    new Proposition('committer-allowed-access', true)
  const committerHasAccess =
    new Proposition('committer-allowed-access', true)
  const prohibitedFileExtensions =
    variableFactory('prohibited-extensions', [...prohibitedExtensions])

  const pushedFileExtension =
    variableFactory('current-file-extension', '.asc')
  const includes = new Operator(operatorType.INCLUDES)
  const and = new Operator(operatorType.AND)

  describe('delegates evaluation of ruleElements in a Rule', () => {
    afterAll(() => {
      elements = []
    })

    describe('when given a Proposition', () => {
      it('pushes the Proposition to a stack', () => {
        elements.push(committerAllowedAccess)
        elements.push(committerHasAccess)
        process(elements)
        expect(processRuleElement).toHaveBeenCalled()
      })
    })

    describe('when given a Variable', () => {
      it('pushes the Proposition to a stack', () => {
        elements.push(prohibitedFileExtensions)
        elements.push(pushedFileExtension)
        process(elements)
        expect(processRuleElement).toHaveBeenCalled()
      })
    })

    describe('when given an Operator', () => {
      it('pushes the Operator to a stack', () => {
        elements.push(includes)
        elements.push(and)
        process(elements)
        expect(processOperator).toHaveBeenCalled()
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

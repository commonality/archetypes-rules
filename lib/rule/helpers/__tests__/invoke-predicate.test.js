/* eslint-disable max-lines-per-function */

const invokePredicate = require('../invoke-predicate')
const ArrayVariable = require('../../../variable/array-variable')
const DateVariable = require('../../../variable/date-variable')
const Proposition = require('../../../proposition/proposition')

jest.mock('../../../variable/array-variable')
jest.mock('../../../variable/date-variable')
jest.mock('../../../proposition/proposition')

describe('invokePredicate', () => {
  describe('invokes RuleElement methods for', () => {
    describe('Propositions', () => {
      let rhsProposition = null
      let lhsProposition = null
      let stack = []

      beforeEach(() => {
        rhsProposition = new Proposition('p', true)
        lhsProposition = new Proposition('q', true)
        stack = [
          rhsProposition,
          lhsProposition
        ]
      })

      test('and', () => {
        invokePredicate(stack, 'and')
        expect(rhsProposition.and).toHaveBeenCalled()
      })
      test('not', () => {
        stack = [ rhsProposition ]
        invokePredicate(stack, 'not')
        expect(rhsProposition.not).toHaveBeenCalled()
      })
      test('or', () => {
        invokePredicate(stack, 'or')
        expect(rhsProposition.or).toHaveBeenCalled()
      })
      test('xor', () => {
        invokePredicate(stack, 'xor')
        expect(rhsProposition.xor).toHaveBeenCalled()
      })
    })

    describe('Variables', () => {
      let rhsVariable = null
      let lhsVariable = null
      let stack = null

      describe('ArrayVariables', () => {
        beforeEach(() => {
          rhsVariable = new ArrayVariable('pees', [])
          lhsVariable = new ArrayVariable('queues', [])
          stack = [
            rhsVariable,
            lhsVariable
          ]
        })

        test('equalTo', () => {
          invokePredicate(stack, 'equalTo')
          expect(rhsVariable.equalTo).toHaveBeenCalled()
        })
        test('greaterThan', () => {
          invokePredicate(stack, 'greaterThan')
          expect(rhsVariable.greaterThan).toHaveBeenCalled()
        })
        test('greaterThanOrEqualTo', () => {
          invokePredicate(stack, 'greaterThanOrEqualTo')
          expect(rhsVariable.greaterThanOrEqualTo).toHaveBeenCalled()
        })
        test('includes', () => {
          invokePredicate(stack, 'includes')
          expect(rhsVariable.includes).toHaveBeenCalled()
        })
        test('includesAny', () => {
          invokePredicate(stack, 'includesAny')
          expect(rhsVariable.includesAny).toHaveBeenCalled()
        })
        test('lessThan', () => {
          invokePredicate(stack, 'lessThan')
          expect(rhsVariable.lessThan).toHaveBeenCalled()
        })
        test('lessThanOrEqualTo', () => {
          invokePredicate(stack, 'lessThanOrEqualTo')
          expect(rhsVariable.lessThanOrEqualTo).toHaveBeenCalled()
        })
        test('notEqualTo', () => {
          invokePredicate(stack, 'notEqualTo')
          expect(rhsVariable.notEqualTo).toHaveBeenCalled()
        })
      })

      describe('DateVariables', () => {
        beforeEach(() => {
          rhsVariable = new DateVariable('rhs')
          lhsVariable = new DateVariable('lhs')
          stack = [
            rhsVariable,
            lhsVariable
          ]
        })
        test('after', () => {
          invokePredicate(stack, 'after')
          expect(rhsVariable.after).toHaveBeenCalled()
        })
        test('before', () => {
          invokePredicate(stack, 'before')
          expect(rhsVariable.before).toHaveBeenCalled()
        })
      })
    })
  })
})

import { jest } from '@jest/globals'
import Proposition from '../../../proposition/proposition'
import ArrayVariable from '../../../variable/array-variable'
import DateVariable from '../../../variable/date-variable'
import invokePredicate from '../invoke-predicate'

jest.mock('../../../variable/array-variable')
jest.mock('../../../variable/date-variable')
jest.mock('../../../proposition/proposition')

describe('invokePredicate', () => {
  describe('invokes RuleElement methods for', () => {
    let spy = null

    beforeEach(() => {
      spy = null
    })

    afterEach(() => {
      spy.mockRestore()
    })

    describe('Propositions', () => {
      let rhsProposition = null
      let lhsProposition = null
      let stack = []

      beforeEach(() => {
        rhsProposition = new Proposition('p', true)
        lhsProposition = new Proposition('q', true)
        stack = [rhsProposition, lhsProposition]
      })

      afterEach(() => {
        spy.mockRestore()
      })

      test('and', () => {
        spy = jest.spyOn(rhsProposition, 'and')
        invokePredicate(stack, 'and')
        expect(spy).toHaveBeenCalled()
      })
      test('not', () => {
        stack = [rhsProposition]
        spy = jest.spyOn(rhsProposition, 'not')
        invokePredicate(stack, 'not')
        expect(spy).toHaveBeenCalled()
      })
      test('or', () => {
        spy = jest.spyOn(rhsProposition, 'or')
        invokePredicate(stack, 'or')
        expect(spy).toHaveBeenCalled()
      })
      test('xor', () => {
        spy = jest.spyOn(rhsProposition, 'xor')
        invokePredicate(stack, 'xor')
        expect(spy).toHaveBeenCalled()
      })
    })

    describe('Operators', () => {})

    describe('Variables', () => {
      let rhsVariable = null
      let lhsVariable = null
      let stack = null

      describe('ArrayVariables', () => {
        beforeEach(() => {
          rhsVariable = new ArrayVariable('pees', [])
          lhsVariable = new ArrayVariable('queues', [])
          stack = [rhsVariable, lhsVariable]
        })

        test('equalTo', () => {
          spy = jest.spyOn(rhsVariable, 'equalTo')
          invokePredicate(stack, 'equalTo')
          expect(spy).toHaveBeenCalled()
        })
        test('greaterThan', () => {
          spy = jest.spyOn(rhsVariable, 'greaterThan')
          invokePredicate(stack, 'greaterThan')
          expect(spy).toHaveBeenCalled()
        })
        test('greaterThanOrEqualTo', () => {
          spy = jest.spyOn(rhsVariable, 'greaterThanOrEqualTo')
          invokePredicate(stack, 'greaterThanOrEqualTo')
          expect(spy).toHaveBeenCalled()
        })
        test('includes', () => {
          spy = jest.spyOn(rhsVariable, 'includes')
          invokePredicate(stack, 'includes')
          expect(spy).toHaveBeenCalled()
        })
        test('includesAny', () => {
          spy = jest.spyOn(rhsVariable, 'includesAny')
          invokePredicate(stack, 'includesAny')
          expect(spy).toHaveBeenCalled()
        })
        test('lessThan', () => {
          spy = jest.spyOn(rhsVariable, 'lessThan')
          invokePredicate(stack, 'lessThan')
          expect(spy).toHaveBeenCalled()
        })
        test('lessThanOrEqualTo', () => {
          spy = jest.spyOn(rhsVariable, 'lessThanOrEqualTo')
          invokePredicate(stack, 'lessThanOrEqualTo')
          expect(spy).toHaveBeenCalled()
        })
        test('notEqualTo', () => {
          spy = jest.spyOn(rhsVariable, 'notEqualTo')
          invokePredicate(stack, 'notEqualTo')
          expect(spy).toHaveBeenCalled()
        })
      })

      describe('DateVariables', () => {
        beforeEach(() => {
          rhsVariable = new DateVariable('rhs')
          lhsVariable = new DateVariable('lhs')
          stack = [rhsVariable, lhsVariable]
        })
        test('after', () => {
          spy = jest.spyOn(rhsVariable, 'after')
          invokePredicate(stack, 'after')
          expect(spy).toHaveBeenCalled()
        })
        test('before', () => {
          spy = jest.spyOn(rhsVariable, 'before')
          invokePredicate(stack, 'before')
          expect(spy).toHaveBeenCalled()
        })
      })
    })
  })
})

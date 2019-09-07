/* eslint-disable max-len,max-lines-per-function,max-statements */
const operatorType = require('../operator-type')

describe('@archetypes/rules/operatorType', () => {
  describe('enumerates all possible Operators (and their aliases), including', () => {
    test('AND', () => {
      expect(operatorType.get('AND')).toBeDefined()
    })
    test('OR', () => {
      expect(operatorType.get('OR')).toBeDefined()
    })
    test('XOR', () => {
      expect(operatorType.get('XOR')).toBeDefined()
    })
    test('NOT', () => {
      expect(operatorType.get('NOT')).toBeDefined()
    })
    test('CONFORMS_TO', () => {
      expect(operatorType.get('CONFORMS_TO')).toBeDefined()
    })
    test('ENDS_WITH', () => {
      expect(operatorType.get('ENDS_WITH')).toBeDefined()
    })
    test('EQ', () => {
      expect(operatorType.get('EQ')).toBeDefined()
    })
    test('EQUAL_TO', () => {
      expect(operatorType.get('EQUAL_TO')).toBeDefined()
    })
    test('NOT_EQUAL_TO', () => {
      expect(operatorType.get('NOT_EQUAL_TO')).toBeDefined()
    })
    test('EVERY', () => {
      expect(operatorType.get('EVERY')).toBeDefined()
    })
    test('GREATER_THAN', () => {
      expect(operatorType.get('GREATER_THAN')).toBeDefined()
    })
    test('GREATER_THAN_OR_EQUAL_TO', () => {
      expect(operatorType.get('GREATER_THAN_OR_EQUAL_TO')).toBeDefined()
    })
    test('GT', () => {
      expect(operatorType.get('GT')).toBeDefined()
    })
    test('GTE', () => {
      expect(operatorType.get('GTE')).toBeDefined()
    })
    test('HAS', () => {
      expect(operatorType.get('HAS')).toBeDefined()
    })
    test('HAS_IN', () => {
      expect(operatorType.get('HAS_IN')).toBeDefined()
    })
    test('INCLUDES', () => {
      expect(operatorType.get('INCLUDES')).toBeDefined()
    })
    test('LESS_THAN', () => {
      expect(operatorType.get('LESS_THAN')).toBeDefined()
    })
    test('LESS_THAN_OR_EQUAL_TO', () => {
      expect(operatorType.get('LESS_THAN_OR_EQUAL_TO')).toBeDefined()
    })
    test('LT', () => {
      expect(operatorType.get('LT')).toBeDefined()
    })
    test('LTE', () => {
      expect(operatorType.get('LTE')).toBeDefined()
    })
    test('NEQ', () => {
      expect(operatorType.get('NEQ')).toBeDefined()
    })
    test('NOT_EQUAL_TO', () => {
      expect(operatorType.get('NOT_EQUAL_TO')).toBeDefined()
    })
    test('SOME', () => {
      expect(operatorType.get('SOME')).toBeDefined()
    })
    test('STARTS_WITH', () => {
      expect(operatorType.get('STARTS_WITH')).toBeDefined()
    })
    test('STARTS_WITH', () => {
      expect(operatorType.get('STARTS_WITH')).toBeDefined()
    })
  })
  describe('toString', () => {
    it('returns the string representation of an Operator', () => {
      expect(operatorType.get('AND').toString()).toBe('AND')
    })
  })
})

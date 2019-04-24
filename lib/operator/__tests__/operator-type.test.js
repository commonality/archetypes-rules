/* eslint-disable max-len */
const operatorType = require('../operator-type')

describe('operatorType', () => {
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
    test('IS_ARGUMENTS', () => {
      expect(operatorType.get('IS_ARGUMENTS')).toBeDefined()
    })
    test('IS_ARRAY', () => {
      expect(operatorType.get('IS_ARRAY')).toBeDefined()
    })
    test('IS_ARRAY_BUFFER', () => {
      expect(operatorType.get('IS_ARRAY_BUFFER')).toBeDefined()
    })
    test('IS_ARRAY_LIKE', () => {
      expect(operatorType.get('IS_ARRAY_LIKE')).toBeDefined()
    })
    test('IS_ARRAY_LIKE_OBJECT', () => {
      expect(operatorType.get('IS_ARRAY_LIKE_OBJECT')).toBeDefined()
    })
    test('IS_BOOLEAN', () => {
      expect(operatorType.get('IS_BOOLEAN')).toBeDefined()
    })
    test('IS_BUFFER', () => {
      expect(operatorType.get('IS_BUFFER')).toBeDefined()
    })
    test('IS_DATE', () => {
      expect(operatorType.get('IS_DATE')).toBeDefined()
    })
    test('IS_ELEMENT', () => {
      expect(operatorType.get('IS_ELEMENT')).toBeDefined()
    })
    test('IS_EMPTY', () => {
      expect(operatorType.get('IS_EMPTY')).toBeDefined()
    })
    test('IS_EQUAL', () => {
      expect(operatorType.get('IS_EQUAL')).toBeDefined()
    })
    test('IS_EQUAL_WITH', () => {
      expect(operatorType.get('IS_EQUAL_WITH')).toBeDefined()
    })
    test('IS_ERROR', () => {
      expect(operatorType.get('IS_ERROR')).toBeDefined()
    })
    test('IS_FINITE', () => {
      expect(operatorType.get('IS_FINITE')).toBeDefined()
    })
    test('IS_FUNCTION', () => {
      expect(operatorType.get('IS_FUNCTION')).toBeDefined()
    })
    test('IS_INTEGER', () => {
      expect(operatorType.get('IS_INTEGER')).toBeDefined()
    })
    test('IS_LENGTH', () => {
      expect(operatorType.get('IS_LENGTH')).toBeDefined()
    })
    test('IS_MAP', () => {
      expect(operatorType.get('IS_MAP')).toBeDefined()
    })
    test('IS_MATCH', () => {
      expect(operatorType.get('IS_MATCH')).toBeDefined()
    })
    test('IS_MATCH_WITH', () => {
      expect(operatorType.get('IS_MATCH_WITH')).toBeDefined()
    })
    test('IS_NA_N', () => {
      expect(operatorType.get('IS_NA_N')).toBeDefined()
    })
    test('IS_NATIVE', () => {
      expect(operatorType.get('IS_NATIVE')).toBeDefined()
    })
    test('IS_NIL', () => {
      expect(operatorType.get('IS_NIL')).toBeDefined()
    })
    test('IS_NULL', () => {
      expect(operatorType.get('IS_NULL')).toBeDefined()
    })
    test('IS_NUMBER', () => {
      expect(operatorType.get('IS_NUMBER')).toBeDefined()
    })
    test('IS_OBJECT', () => {
      expect(operatorType.get('IS_OBJECT')).toBeDefined()
    })
    test('IS_OBJECT_LIKE', () => {
      expect(operatorType.get('IS_OBJECT_LIKE')).toBeDefined()
    })
    test('IS_PLAIN_OBJECT', () => {
      expect(operatorType.get('IS_PLAIN_OBJECT')).toBeDefined()
    })
    test('IS_PLAIN_OBJECT', () => {
      expect(operatorType.get('IS_PLAIN_OBJECT')).toBeDefined()
    })
    test('IS_REG_EXP', () => {
      expect(operatorType.get('IS_REG_EXP')).toBeDefined()
    })
    test('IS_SAFE_INTEGER', () => {
      expect(operatorType.get('IS_SAFE_INTEGER')).toBeDefined()
    })
    test('IS_SET', () => {
      expect(operatorType.get('IS_SET')).toBeDefined()
    })
    test('IS_STRING', () => {
      expect(operatorType.get('IS_STRING')).toBeDefined()
    })
    test('IS_SYMBOL', () => {
      expect(operatorType.get('IS_SYMBOL')).toBeDefined()
    })
    test('IS_TYPED_ARRAY', () => {
      expect(operatorType.get('IS_TYPED_ARRAY')).toBeDefined()
    })
    test('IS_UNDEFINED', () => {
      expect(operatorType.get('IS_UNDEFINED')).toBeDefined()
    })
    test('IS_WEAK_MAP', () => {
      expect(operatorType.get('IS_WEAK_MAP')).toBeDefined()
    })
    test('IS_WEAK_SET', () => {
      expect(operatorType.get('IS_WEAK_SET')).toBeDefined()
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
    test('UNSET', () => {
      expect(operatorType.get('UNSET')).toBeDefined()
    })
  })
  describe('toString', () => {
    it('returns the string representation of an Operator', () => {
      expect(operatorType.get('AND').toString()).toBe('AND')
    })
  })
})

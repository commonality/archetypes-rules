/* eslint-disable max-len,max-lines-per-function */

const Operator = require('../operator.js')
const operatorType = require('../operator-type')

describe('@archetypes/rules/Operator', () => {
  it('represents a Boolean or quantifier operation', () => {
    const operator = new Operator(operatorType.AND)
    expect(operator.name).toBe('AND')
  })

  describe('constructor', () => {
    it('can ignore "valid" operator types', () => {
      const operator = new Operator('POO_POO_PLATER', {
        throws: false
      })
      expect(operator.name).toBe('POO_POO_PLATER')
    })
  })

  describe('toOperationName()', () => {
    it('returns the operation method name to be invoked', () => {
      const operator = new Operator('CONFORMS_TO')
      expect(operator.toOperationName()).toBe('conformsTo')
    })
  })
  test('toString() returns the Operator name', () => {
    const operator = new Operator(operatorType.AND)
    expect(operator.toString()).toBe('AND')
  })
  test('valueOf() returns the Operator name', () => {
    const operator = new Operator(operatorType.INCLUDES_ANY)
    expect(operator.valueOf()).toBe('INCLUDES_ANY')
  })
  describe('static', () => {
    describe('isOperator', () => {
      it('evaluates whether a RuleElement type is "@archetypes/rules/Operator"', () => {
        const ruleElement = new Operator(operatorType.XOR)
        expect(Operator.isOperator(ruleElement)).toBe(true)
      })
    })

    describe('isValid', () => {
      it('determines whether a key is a valid or known operator name', () => {
        expect(Operator.isValid('LESS_THAN_OR_EQUAL_TO')).toBe(true)
      })
      it('optionally throws an ArgumentError for invalid operator names', () => {
        expect(() => {
          Operator.isValid('MORE_INFINITE_THAN', {
            'throws': true
          })
        }).toThrow()
      })
    })

    describe('factory', () => {
      it('creates a new Operator', () => {
        const operator = Operator.factory('POOP', {
          throws: false
        })
        expect(operator.name).toBe('POOP')
      })
    })
  })
})

/* eslint-disable max-len,max-lines-per-function,max-statements,no-magic-numbers */
const SetVariable = require('../set-variable')
const Variable = require('../variable')

describe('Variable', () => {
  describe('represents an entity with a', () => {
    let variable = null

    beforeEach(() => {
      variable = new Variable('timeOfDay', 'morning')
    })

    afterEach(() => {
      variable = null
    })

    test('name', () => {
      expect(variable.name).toBe('timeOfDay')
    })
    test('value', () => {
      expect(variable.value).toBe('morning')
    })
    test('type', () => {
      expect(variable.type).toBe('@archetypes/rules/Variable')
    })
  })

  describe('has quantifier methods', () => {
    let amount = null
    let proposition = null
    let total = null
    beforeEach(() => {
      amount = new Variable('amount', 100.1)
      total = new Variable('total', 100.10)
    })

    afterEach(() => {
      amount = null
      proposition = null
      total = null
    })
    describe('equalTo', () => {
      it('evaluates whether it is equal to another variable', () => {
        proposition = amount.equalTo(total)
        expect(proposition.value).toBe(true)
      })
    })

    describe('eq', () => {
      it('is shorthand for "equalTo"', () => {
        // Eq alias

        proposition = amount.eq(total)
        expect(proposition.value).toBe(true)
      })
    })
    describe('greaterThan', () => {
      it('evaluates whether it is greater than another Variable', () => {
        proposition = amount.greaterThan(total)
        expect(proposition.value).toBe(false)

        amount.value = 100.11
        proposition = amount.greaterThan(total)
        expect(proposition.value).toBe(true)
      })
    })

    describe('gt', () => {
      it('is shorthand for "greaterThan"', () => {
        proposition = amount.gt(total)
        expect(proposition.value).toBe(false)
      })
    })

    describe('greaterThanOrEqualTo', () => {
      it('evaluates whether it is greater than or equal to another variable', () => {
        proposition = amount.greaterThanOrEqualTo(total)
        expect(proposition.value).toBe(true)

        amount.value = 100.11
        proposition = amount.greaterThanOrEqualTo(total)
        expect(proposition.value).toBe(true)
      })
    })

    describe('gte', () => {
      it('is an alias for "greaterThanOrEqualTo"', () => {
        // Gte alias

        proposition = amount.gte(total)
        expect(proposition.value).toBe(true)
      })
    })

    describe('lessThan', () => {
      it('evaluates whether it is less than another variable', () => {
        proposition = amount.lessThan(total)
        expect(proposition.value).toBe(false)

        amount.value = 0
        proposition = amount.lessThan(total)
        expect(proposition.value).toBe(true)
      })
    })

    describe('lt', () => {
      it('is an alias for "lessThan"', () => {
        // Lt alias

        proposition = amount.lt(total)
        expect(proposition.value).toBe(false)
      })
    })

    describe('lessThanOrEqualTo', () => {
      it('evaluates whether it is less than or equal to another variable', () => {
        proposition = amount.lessThanOrEqualTo(total)
        expect(proposition.value).toBe(true)

        amount.value = 1
        proposition = amount.lessThanOrEqualTo(total)
        expect(proposition.value).toBe(true)

        amount.value = 1000
        proposition = amount.lessThanOrEqualTo(total)
        expect(proposition.value).toBe(false)
      })
    })
    describe('lte', () => {
      it('is an alias for "lessThanOrEqualTo"', () => {
        // Lte alias

        proposition = amount.lte(total)
        expect(proposition.value).toBe(true)
      })
    })
    describe('notEqualTo', () => {
      it('evaluates whether it is not equal to another variable', () => {
        proposition = amount.notEqualTo(total)
        expect(proposition.value).toBe(false)

        amount.value = 0
        proposition = amount.notEqualTo(total)
        expect(proposition.value).toBe(true)
      })
    })
    describe('neq', () => {
      it('is an alias for "notEqualTo"', () => {
        // Neq alias

        proposition = amount.neq(total)
        expect(proposition.value).toBe(false)
      })
    })
  })

  describe('static', () => {
    describe('isVariable', () => {
      it('evaluates whether a ruleElement is of type "@archetypes/rules/Variable"', () => {
        const variable = new SetVariable('stubSetVariable', new Set())
        expect(Variable.isVariable(variable)).toBe(true)
      })
    })
    describe('createNullObject', () => {
      it('creates a Variable with a "null" value', () => {
        const variable = Variable.createNullObject('null')
        expect(variable).toBeInstanceOf(Variable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

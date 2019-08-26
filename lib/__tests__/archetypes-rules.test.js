const {
  Operator,
  Proposition,
  Variable
} = require('..')

describe('@archetypes/rules', () => {
  describe('explicitly model operational business constraints with', () => {
    describe('Operators', () => {
      test('represent Boolean and quantifier evaluations', () => {
        expect(Operator).toBeDefined()
      })
    })
    describe('Propositions', () => {
      test('represent statements with truth values', () => {
        expect(Proposition).toBeDefined()
      })
    })
    describe('Variables', () => {
      test('represent named symbols with values', () => {
        expect(Variable).toBeDefined()
      })
    })
  })
})

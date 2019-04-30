const invokePredicate = require('../invoke-predicate')
const Operator = require('../../../operator/operator')
const processOperator = require('../process-operator')
const Proposition = require('../../../proposition/proposition')

jest.mock('../invoke-predicate')

describe('processOperator', () => {
  it('invokes a boolean, quantifier, or qualifier operation', () => {
    const operator = new Operator('NOT')
    const stack = [
      new Proposition('p', true)
    ]
    processOperator(stack, operator)
    expect(invokePredicate).toHaveBeenCalled()
  })
})

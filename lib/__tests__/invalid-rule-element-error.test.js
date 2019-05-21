const InvalidRuleElementError = require('../errors/invalid-rule-element-error')

describe('InvalidRuleElementError', () => {
  it('represents an invalid or unrecognized RuleElement instance', () => {
    const err = new InvalidRuleElementError('huh?')
    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(InvalidRuleElementError)
  })
})

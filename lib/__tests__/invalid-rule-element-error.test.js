const InvalidRuleElementError = require('../invalid-rule-element-error.js')

describe('InvalidRuleElementError', () => {
  it('represents an invalid or unrecognized RuleElement instance', () => {
    const err = new InvalidRuleElementError('huh?')
    expect(err).toBeDefined()
    expect(err).toBeInstanceOf(InvalidRuleElementError)
  })
})

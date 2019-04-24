const processRuleElement = require('../process-rule-element')
const Proposition = require('../../../proposition/proposition')

describe('processRuleElement', () => {
  it('pushes Propositions and Variables on to a stack', () => {
    const stack = []
    const ruleElement = new Proposition('p', true)
    processRuleElement(stack, ruleElement)
    const ONE = 1
    expect(stack.length).toBe(ONE)
  })
})

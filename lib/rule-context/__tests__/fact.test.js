const Fact = require('../fact')
const RuleContext = require('../rule-context')

describe('Fact', () => {
  it('is an alias for RuleContext', () => {
    expect(Fact).toBe(RuleContext)

    const fact = new Fact('fact')
    fact.addProposition('p', true)
      .addVariable('size', 'small')

    const ruleContext = new RuleContext('fact')
    ruleContext.addProposition('p', true)
      .addVariable('size', 'small')

    expect(fact).toEqual(ruleContext)
  })
})

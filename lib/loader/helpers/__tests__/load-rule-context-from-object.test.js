const travelDestination = require('./__fixtures__/do-not-travel-list.rule-context.json')
const travelDestinationError = require('./__fixtures__/do-not-travel-list.rule-context.error.json')
const loadRuleContextFromObject = require('../load-rule-context-from-object')
const RuleContext = require('../../../rule-context/rule-context')

describe('loadRuleContextFromObject', () => {
  it('creates a RuleContext.prototype from an object literal', () => {
    const destination = loadRuleContextFromObject(travelDestination)
    expect(destination).toBeInstanceOf(RuleContext)
    expect(destination.elements.length)
      .toBe(travelDestination.elements.length)
  })
  it('throws an InvalidRuleElementError for bad types', () => {
    expect(() => {
      loadRuleContextFromObject(travelDestinationError)
    }).toThrow()
  })
})

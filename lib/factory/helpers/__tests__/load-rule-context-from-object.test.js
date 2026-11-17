/* eslint-disable max-len */
import RuleContext from '../../../rule-context/rule-context'
import loadRuleContextFromObject from '../load-rule-context-from-object'
import travelDestinationError from './__fixtures__/do-not-travel-list.rule-context.error.json' with {
  type: 'json'
}
import travelDestination from './__fixtures__/do-not-travel-list-with-override.rule-context.json' with {
  type: 'json'
}

describe('loadRuleContextFromObject', () => {
  it('creates a RuleContext.prototype from an object literal', () => {
    const destination = loadRuleContextFromObject(travelDestination)
    expect(destination).toBeInstanceOf(RuleContext)
    expect(destination.elements.length).toBe(
      Object.values(travelDestination.elements).length
    )
    expect(destination.overrides.length).toBe(
      Object.values(travelDestination.overrides).length
    )
  })
  it('throws an InvalidRuleElementError for bad types', () => {
    expect(() => {
      loadRuleContextFromObject(travelDestinationError)
    }).toThrow()
  })
})

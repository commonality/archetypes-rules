/* eslint-disable max-len */

const loadRuleOverrideFromObject = require('../load-rule-override-from-object')
const travelOverride = require('./__fixtures__/do-not-travel-kp.rule-override.json')
const RuleOverride = require('../../../rule-override/rule-override')

describe('loadRuleOverrideFromObject', () => {
  it('creates a RuleOverride.prototype from an object literal', () => {
    const object = loadRuleOverrideFromObject(travelOverride)
    expect(object).toBeInstanceOf(RuleOverride)
  })
})

/* eslint-disable max-len */

const doNotTravelListRuleSet = require('../__tests__/__fixtures__/do-not-travel-list.rule-set.json')
const loadRuleSetFromObject = require('../load-rule-set-from-object.js')
const RuleSet = require('../../../rule-set/rule-set')

describe('loadRuleSetFromObject', () => {
  it('creates a RuleSet instance', () => {
    const ruleSet = loadRuleSetFromObject(doNotTravelListRuleSet)
    expect(ruleSet).toBeInstanceOf(RuleSet)
  })
})

/* eslint-disable max-len */

import RuleSet from "../../../rule-set/rule-set"
import doNotTravelListRuleSet from "../__tests__/__fixtures__/do-not-travel-list.rule-set.json" with { type: 'json' }
import loadRuleSetFromObject from "../load-rule-set-from-object.js"

describe("loadRuleSetFromObject", () => {
	it("creates a RuleSet instance", () => {
		const ruleSet = loadRuleSetFromObject(doNotTravelListRuleSet)
		expect(ruleSet).toBeInstanceOf(RuleSet)
	})
})

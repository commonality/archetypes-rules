/* eslint-disable max-len */

import RuleOverride from "../../../rule-override/rule-override"
import loadRuleOverrideFromObject from "../load-rule-override-from-object"
import travelOverride from "./__fixtures__/do-not-travel-kp.rule-override.json" with { type: 'json' }

describe("loadRuleOverrideFromObject", () => {
	it("creates a RuleOverride.prototype from an object literal", () => {
		const object = loadRuleOverrideFromObject(travelOverride)
		expect(object).toBeInstanceOf(RuleOverride)
	})
})

import ow from "ow"
import RuleSet from "../../rule-set/rule-set"
import loadRuleFromObject from "./load-rule-from-object"
import loadRuleOverrideFromObject from "./load-rule-override-from-object"

const loadRuleSetFromObject = (literal) => {
	ow(literal, ow.object)

	const ruleSet = new RuleSet(literal.name)
	Object.values(literal.rules).forEach((rule) => {
		ruleSet.addRule(loadRuleFromObject(rule))
	})
	Object.values(literal.ruleOverrides).forEach((override) => {
		ruleSet.addRuleOverride(loadRuleOverrideFromObject(override))
	})
	return ruleSet
}

export default loadRuleSetFromObject

import typeInspector from "../../type-inspector/type-inspector";
import loadRuleContextFromObject from "./load-rule-context-from-object";
import loadRuleFromObject from "./load-rule-from-object";
import loadRuleOverrideFromObject from "./load-rule-override-from-object";
import loadRuleSetFromObject from "./load-rule-set-from-object";

const { isRule, isRuleContext, isRuleOverride, isRuleSet } = typeInspector

const typeEvaluationMap = new Map([
	[(literal) => isRule(literal), (literal) => loadRuleFromObject(literal)],
	[
		(literal) => isRuleContext(literal),
		(literal) => loadRuleContextFromObject(literal),
	],
	[
		(literal) => isRuleOverride(literal),
		(literal) => loadRuleOverrideFromObject(literal),
	],
	[
		(literal) => isRuleSet(literal),
		(literal) => loadRuleSetFromObject(literal),
	],
]);

const loadByType = (literal) => {
	for (const [isType, loadObjectFrom] of typeEvaluationMap) {
		if (isType(literal)) {
			return loadObjectFrom(literal);
		}
	}
	return null;
};

export default loadByType;

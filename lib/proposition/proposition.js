import is from "@sindresorhus/is";
import get from "lodash.get";
import ow from "ow";
import createRuleElementName from "../helpers/create-rule-element-name";
import RuleElement from "../rule-element/rule-element";
import typeInspector from "../type-inspector/type-inspector";

class Proposition extends RuleElement {
	constructor(name, value) {
		super(name, value, ow.boolean);
	}

	and(proposition) {
		const value = this.value && proposition.value;
		return Proposition.factory(this, value, proposition, "AND");
	}

	not() {
		return new Proposition(`(NOT ${this.name})`, !this.value);
	}

	or(proposition) {
		const value = this.value || proposition.value;
		return Proposition.factory(this, value, proposition, "OR");
	}

	xor(proposition) {
		const value = !this.value !== !proposition.value;
		return Proposition.factory(this, value, proposition, "XOR");
	}

	static factory(proposition, value, anotherProposition, operator) {
		if (is.string(proposition)) {
			return new Proposition(proposition, value);
		}
		const name = createRuleElementName(
			proposition,
			anotherProposition,
			operator,
		);
		return new Proposition(name, value);
	}

	static isProposition(ruleElement) {
		return get(ruleElement, "type") === typeInspector.PROPOSITION;
	}
}

export default Proposition;

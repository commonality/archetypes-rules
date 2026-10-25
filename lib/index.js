import InvalidRuleElementError from "./errors/invalid-rule-element-error"
import factory from "./factory/factory"
import Operator from "./operator/operator"
import operatorType from "./operator/operator-type"
import Proposition from "./proposition/proposition"
import ActivityRule from "./rule/activity-rule"
import Rule from "./rule/rule"
import Fact from "./rule-context/fact"
import RuleContext from "./rule-context/rule-context"
import RuleElement from "./rule-element/rule-element"
import RuleOverride from "./rule-override/rule-override"
import RuleSet from "./rule-set/rule-set"
import typeInspector from "./type-inspector/type-inspector"
import ArrayVariable from "./variable/array-variable"
import DateVariable from "./variable/date-variable"
import ErrorVariable from "./variable/error-variable"
import MapVariable from "./variable/map-variable"
import NumberVariable from "./variable/number-variable"
import ObjectVariable from "./variable/object-variable"
import SetVariable from "./variable/set-variable"
import StringVariable from "./variable/string-variable"
import SymbolVariable from "./variable/symbol-variable"
import Variable from "./variable/variable"
import WeakMapVariable from "./variable/weak-map-variable"
import WeakSetVariable from "./variable/weak-set-variable"

const archetypesRules = {
	ActivityRule,
	ArrayVariable,
	DateVariable,
	ErrorVariable,
	Fact,
	factory,
	InvalidRuleElementError,
	MapVariable,
	NumberVariable,
	ObjectVariable,
	operatorType,
	Operator,
	Proposition,
	Rule,
	RuleContext,
	RuleElement,
	RuleOverride,
	RuleSet,
	SetVariable,
	StringVariable,
	SymbolVariable,
	typeInspector,
	Variable,
	WeakMapVariable,
	WeakSetVariable,
}

export default archetypesRules

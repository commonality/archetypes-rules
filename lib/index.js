import InvalidRuleElementError from './errors/invalid-rule-element-error'
import factory from './factory/factory'
import Operator from './operator/operator'
import operatorType from './operator/operator-type'
import Proposition from './proposition/proposition'
import ActivityRule from './rule/activity-rule'
import Rule from './rule/rule'
import Fact from './rule-context/fact'
import RuleContext from './rule-context/rule-context'
import RuleElement from './rule-element/rule-element'
import RuleOverride from './rule-override/rule-override'
import RuleSet from './rule-set/rule-set'
import typeInspector from './type-inspector/type-inspector'
import ArrayVariable from './variable/array-variable'
import BigIntVariable from './variable/bigint-variable'
import DateVariable from './variable/date-variable'
import ErrorVariable from './variable/error-variable'
import MapVariable from './variable/map-variable'
import NumberVariable from './variable/number-variable'
import ObjectVariable from './variable/object-variable'
import PromiseVariable from './variable/promise-variable'
import RegExpVariable from './variable/regexp-variable'
import SetVariable from './variable/set-variable'
import StringVariable from './variable/string-variable'
import SymbolVariable from './variable/symbol-variable'
import TemoralDurationVariable from './variable/temporal-duration-variable'
import TemoralInstantVariable from './variable/temporal-instant-variable'
import TemoralPlainDateTimeVariable from './variable/temporal-plain-date-time-variable'
import TemoralPlainDateVariable from './variable/temporal-plain-date-variable'
import TemoralMonthDayVariable from './variable/temporal-plain-month-day-variable'
import Variable from './variable/variable'
import WeakMapVariable from './variable/weak-map-variable'
import WeakSetVariable from './variable/weak-set-variable'

/**
 * @namespace archetypes
 * @description
 * The <code>archetypes</code> namespace is an abstract container used to hold a
 * logical grouping of unique identifiers or symbols; this case, the
 * <code>rules</code> namespace. Namespaces organize code elements (such as
 * functions, variables, and classes) into distinct scopes to prevent naming
 * conflicts between different libraries or modules that might otherwise share
 * the same identifier names.
 * @license
 * {@link https://github.com/commonality/archetypes-rules/blob/main/LICENSE MIT}
 */
export const archetypes = {
  /**
   * The container for all of archetype-rules' classes, objects, and functions.
   * @namespace archetypes.rules
   * @memberof archetypes
   */
  rules: {
    ActivityRule,
    ArrayVariable,
    BigIntVariable,
    DateVariable,
    ErrorVariable,
    Fact,
    factory,
    InvalidRuleElementError,
    MapVariable,
    NumberVariable,
    ObjectVariable,
    Operator,
    operatorType,
    PromiseVariable,
    Proposition,
    RegExpVariable,
    Rule,
    RuleContext,
    RuleElement,
    RuleOverride,
    RuleSet,
    SetVariable,
    StringVariable,
    SymbolVariable,
    TemoralDurationVariable,
    TemoralInstantVariable,
    TemoralPlainDateTimeVariable,
    TemoralPlainDateVariable,
    TemoralMonthDayVariable,
    typeInspector,
    Variable,
    WeakMapVariable,
    WeakSetVariable
  }
}

const ActivityRule = require('./rule/activity-rule')
const ArrayVariable = require('./variable/array-variable')
const DateVariable = require('./variable/date-variable')
const ErrorVariable = require('./variable/error-variable')
const Fact = require('./rule-context/fact')
const InvalidRuleElementError = require('./invalid-rule-element-error')
const factory = require('./factory/factory')
const MapVariable = require('./variable/map-variable')
const NumberVariable = require('./variable/number-variable')
const ObjectVariable = require('./variable/object-variable')
const Operator = require('./operator/operator')
const Proposition = require('./proposition/proposition')
const Rule = require('./rule/rule')
const RuleContext = require('./rule-context/rule-context')
const RuleElement = require('./rule-element')
const RuleOverride = require('./rule-override/rule-override')
const RuleSet = require('./rule-set/rule-set')
const SetVariable = require('./variable/set-variable')
const StringVariable = require('./variable/string-variable')
const SymbolVariable = require('./variable/symbol-variable')
const typeInspector = require('./type-inspector/type-inspector')
const Variable = require('./variable/variable')
const WeakMapVariable = require('./variable/weak-map-variable')
const WeakSetVariable = require('./variable/weak-set-variable')

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
  WeakSetVariable
}

module.exports = archetypesRules

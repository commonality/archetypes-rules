/* eslint-disable-next-line max-len */
import assignTypeInspectionMethods from './helpers/assign-type-inspection-methods'

import isTypeOf from './helpers/is-type-of'
import isValueTypeOf from './helpers/is-value-type-of'
import typeOf from './helpers/type-of'

import valueTypeOf from './helpers/value-type-of'

const typeEnum = {
  "ARRAY_VARIABLE": "archetypes.rules.ArrayVariable",
  "archetypes": {
    "rules": {
      "ArrayVariable": "ARRAY_VARIABLE",
      "DateVariable": "DATE_VARIABLE",
      "ErrorVariable": "ERROR_VARIABLE",
      "RuleContext": "RULE_CONTEXT",
      "MapVariable": "MAP_VARIABLE",
      "NumberVariable": "NUMBER_VARIABLE",
      "ObjectVariable": "OBJECT_VARIABLE",
      "Operator": "OPERATOR",
      "Proposition": "PROPOSITION",
      "RuleElement": "RULE_ELEMENT",
      "RuleOverride": "RULE_OVERRIDE",
      "RuleSet": "RULE_SET",
      "Rule": "RULE",
      "SetVariable": "SET_VARIABLE",
      "StringVariable": "STRING_VARIABLE",
      "SymbolVariable": "SYMBOL_VARIABLE",
      "Variable": "VARIABLE",
      "WeakMapVariable": "WEAK_MAP_VARIABLE",
      "WeakSetVariable": "WEAK_SET_VARIABLE"
    }
  },
  "DATE_VARIABLE": "archetypes.rules.DateVariable",
  "ERROR_VARIABLE": "archetypes.rules.ErrorVariable",
  "FACT": "archetypes.rules.RuleContext",
  "MAP_VARIABLE": "archetypes.rules.MapVariable",
  "NUMBER_VARIABLE": "archetypes.rules.NumberVariable",
  "OBJECT_VARIABLE": "archetypes.rules.ObjectVariable",
  "OPERATOR": "archetypes.rules.Operator",
  "PROPOSITION": "archetypes.rules.Proposition",
  "RULE_CONTEXT": "archetypes.rules.RuleContext",
  "RULE_ELEMENT": "archetypes.rules.RuleElement",
  "RULE_OVERRIDE": "archetypes.rules.RuleOverride",
  "RULE_SET": "archetypes.rules.RuleSet",
  "RULE": "archetypes.rules.Rule",
  "SET_VARIABLE": "archetypes.rules.SetVariable",
  "STRING_VARIABLE": "archetypes.rules.StringVariable",
  "SYMBOL_VARIABLE": "archetypes.rules.SymbolVariable",
  "VARIABLE": "archetypes.rules.Variable",
  "WEAK_MAP_VARIABLE": "archetypes.rules.WeakMapVariable",
  "WEAK_SET_VARIABLE": "archetypes.rules.WeakSetVariable"
}


const typeInspector = Object.assign(typeEnum, {
  isTypeOf,
  isValueTypeOf,
  typeOf,
  valueTypeOf
})

assignTypeInspectionMethods(typeInspector)

export default typeInspector

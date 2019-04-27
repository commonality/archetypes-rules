const { enumFactory } = require('enum-nom-nommer')
const isObjectWithTypeAttr = require('../helpers/is-object-with-type-attr')

const ruleElementType = enumFactory.create({
  'ARRAY_VARIABLE': 'archetypes.rules.ArrayVariable',
  'DATE_VARIABLE': 'archetypes.rules.DateVariable',
  'ERROR_VARIABLE': 'archetypes.rules.ErrorVariable',
  'FACT': 'archetypes.rules.RuleContext',
  'MAP_VARIABLE': 'archetypes.rules.MapVariable',
  'NUMBER_VARIABLE': 'archetypes.rules.NumberVariable',
  'OBJECT_VARIABLE': 'archetypes.rules.ObjectVariable',
  'OPERATOR': 'archetypes.rules.Operator',
  'PROPOSITION': 'archetypes.rules.Proposition',
  'RULE_CONTEXT': 'archetypes.rules.RuleContext',
  'RULE_OVERRIDE': 'archetypes.rules.RuleOverride',
  'RULE_SET': 'archetypes.rules.RuleSet',
  'RULE': 'archetypes.rules.Rule',
  'SET_VARIABLE': 'archetypes.rules.SetVariable',
  'STRING_VARIABLE': 'archetypes.rules.StringVariable',
  'SYMBOL_VARIABLE': 'archetypes.rules.SymbolVariable',
  'VARIABLE': 'archetypes.rules.Variable',
  'WEAK_MAP_VARIABLE': 'archetypes.rules.WeakMapVariable',
  'WEAK_SET_VARIABLE': 'archetypes.rules.WeakSetVariable'
})

ruleElementType.isRule = (value) => isObjectWithTypeAttr(value) &&
  value.type === ruleElementType.RULE
ruleElementType.isRuleContext = (value) => isObjectWithTypeAttr(value) &&
  value.type === ruleElementType.RULE_CONTEXT
ruleElementType.isRuleOverride = (value) => isObjectWithTypeAttr(value) &&
  value.type === ruleElementType.RULE_OVERRIDE
ruleElementType.isRuleSet = (value) => isObjectWithTypeAttr(value) &&
  value.type === ruleElementType.RULE_SET

module.exports = ruleElementType
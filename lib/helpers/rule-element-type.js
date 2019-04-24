const { enumFactory } = require('enum-nom-nommer')

const ruleElementType = enumFactory.create({
  'ARRAY_VARIABLE': 'archetypes.rules.ArrayVariable',
  'DATE_VARIABLE': 'archetypes.rules.DateVariable',
  'ERROR_VARIABLE': 'archetypes.rules.ErrorVariable',
  'MAP_VARIABLE': 'archetypes.rules.MapVariable',
  'NUMBER_VARIABLE': 'archetypes.rules.NumberVariable',
  'OBJECT_VARIABLE': 'archetypes.rules.ObjectVariable',
  'OPERATOR': 'archetypes.rules.Operator',
  'PROPOSITION': 'archetypes.rules.Proposition',
  'SET_VARIABLE': 'archetypes.rules.SetVariable',
  'STRING_VARIABLE': 'archetypes.rules.StringVariable',
  'SYMBOL_VARIABLE': 'archetypes.rules.SymbolVariable',
  'VARIABLE': 'archetypes.rules.Variable',
  'WEAK_MAP_VARIABLE': 'archetypes.rules.WeakMapVariable',
  'WEAK_SET_VARIABLE': 'archetypes.rules.WeakSetVariable'
})

module.exports = ruleElementType

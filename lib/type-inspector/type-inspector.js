const assignTypeInspectionMethods = require('./helpers/assign-type-inspection-methods')
const { enumFactory } = require('enum-nom-nommer')
const isTypeOf = require('./helpers/is-type-of')
const isValueTypeOf = require('./helpers/is-value-type-of')
const typeOf = require('./helpers/type-of')
const valueTypeOf = require('./helpers/value-type-of')
const types = require('./helpers/types.json')

const typeInspector = Object.assign(enumFactory.create(types), {
  isTypeOf,
  isValueTypeOf,
  typeOf,
  valueTypeOf
})

assignTypeInspectionMethods(typeInspector)

module.exports = typeInspector

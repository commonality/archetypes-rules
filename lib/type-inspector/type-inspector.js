/* eslint-disable-next-line max-len */

import { enumFactory } from 'enum-nom-nommer'
import assignTypeInspectionMethods from './helpers/assign-type-inspection-methods'

import isTypeOf from './helpers/is-type-of'
import isValueTypeOf from './helpers/is-value-type-of'
import typeOf from './helpers/type-of'
import types from './helpers/types.json' with { type: 'json' }

import valueTypeOf from './helpers/value-type-of'

const typeInspector = Object.assign(enumFactory.create(types), {
  isTypeOf,
  isValueTypeOf,
  typeOf,
  valueTypeOf
})

assignTypeInspectionMethods(typeInspector)

export default typeInspector

import ArrayVariable from '../array-variable'
import DateVariable from '../date-variable'
import ErrorVariable from '../error-variable'
import MapVariable from '../map-variable'
import NumberVariable from '../number-variable'
import ObjectVariable from '../object-variable'
import SetVariable from '../set-variable'
import StringVariable from '../string-variable'
import WeakMapVariable from '../weak-map-variable'
import WeakSetVariable from '../weak-set-variable'

const nullVariableType = new Map([
  [
    'NULL_ARRAY_VARIABLE',
    (name) => ArrayVariable.createNullObject(name)
  ],
  [
    'NULL_DATE_VARIABLE',
    (name) => DateVariable.createNullObject(name)
  ],
  [
    'NULL_ERROR_VARIABLE',
    (name) => ErrorVariable.createNullObject(name)
  ],
  [
    'NULL_MAP_VARIABLE',
    (name) => MapVariable.createNullObject(name)
  ],
  [
    'NULL_NUMBER_VARIABLE',
    (name) => NumberVariable.createNullObject(name)
  ],
  [
    'NULL_OBJECT_VARIABLE',
    (name) => ObjectVariable.createNullObject(name)
  ],
  [
    'NULL_SET_VARIABLE',
    (name) => SetVariable.createNullObject(name)
  ],
  [
    'NULL_STRING_VARIABLE',
    (name) => StringVariable.createNullObject(name)
  ],
  [
    'NULL_WEAK_MAP_VARIABLE',
    (name) => WeakMapVariable.createNullObject(name)
  ],
  [
    'NULL_WEAK_SET_VARIABLE',
    (name) => WeakSetVariable.createNullObject(name)
  ]
])

export default nullVariableType

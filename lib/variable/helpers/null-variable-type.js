const ArrayVariable = require('../array-variable')
const DateVariable = require('../date-variable')
const ErrorVariable = require('../error-variable')
const MapVariable = require('../map-variable')
const NumberVariable = require('../number-variable')
const ObjectVariable = require('../object-variable')
const SetVariable = require('../set-variable')
const StringVariable = require('../string-variable')
const WeakMapVariable = require('../weak-map-variable')
const WeakSetVariable = require('../weak-set-variable')

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

module.exports = nullVariableType

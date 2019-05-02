const {
  date,
  error,
  map,
  number,
  object,
  set,
  string,
  symbol,
  weakMap,
  weakSet
} = require('@sindresorhus/is')
const ArrayVariable = require('../array-variable')
const DateVariable = require('../date-variable')
const ErrorVariable = require('../error-variable')
const MapVariable = require('../map-variable')
const NumberVariable = require('../number-variable')
const ObjectVariable = require('../object-variable')
const SetVariable = require('../set-variable')
const StringVariable = require('../string-variable')
const SymbolVariable = require('../symbol-variable')
const WeakMapVariable = require('../weak-map-variable')
const WeakSetVariable = require('../weak-set-variable')

const variableTypeMap = new Map([
  [Array.isArray, ArrayVariable],
  [date, DateVariable],
  [error, ErrorVariable],
  [map, MapVariable],
  [number, NumberVariable],
  [set, SetVariable],
  [string, StringVariable],
  [symbol, SymbolVariable],
  [weakMap, WeakMapVariable],
  [weakSet, WeakSetVariable],
  [object, ObjectVariable]
])

const createVariableByInference = (name, value) => {
  let variable = null
  for (let [isTypeMatch, VariableConstructor] of variableTypeMap) {
    if (isTypeMatch(value)) {
      variable = new VariableConstructor(name, value)
      break
    }
  }
  return variable
}

module.exports = createVariableByInference

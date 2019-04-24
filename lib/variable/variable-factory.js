const ArrayVariable = require('./array-variable')
const DateVariable = require('./date-variable')
const ErrorVariable = require('./error-variable')
const isDate = require('lodash.isdate')
const isError = require('lodash.iserror')
const isMap = require('lodash.ismap')
const isNumber = require('lodash.isnumber')
const isObject = require('lodash.isobject')
const isSet = require('lodash.isset')
const isString = require('lodash.isstring')
const isSymbol = require('lodash.issymbol')
const isTypeNullVariable = require('./helpers/is-type-null-variable')
const isVariable = require('./helpers/is-variable')
const isWeakMap = require('lodash.isweakmap')
const isWeakSet = require('lodash.isweakset')
const MapVariable = require('./map-variable')
const NumberVariable = require('./number-variable')
const ObjectVariable = require('./object-variable')
const SetVariable = require('./set-variable')
const StringVariable = require('./string-variable')
const SymbolVariable = require('./symbol-variable')
const WeakMapVariable = require('./weak-map-variable')
const WeakSetVariable = require('./weak-set-variable')
const nullVariableType = require('./helpers/null-variable-type')

const variableTypeMap = new Map([
  [Array.isArray, ArrayVariable],
  [isDate, DateVariable],
  [isError, ErrorVariable],
  [isMap, MapVariable],
  [isNumber, NumberVariable],
  [isSet, SetVariable],
  [isString, StringVariable],
  [isSymbol, SymbolVariable],
  [isWeakMap, WeakMapVariable],
  [isWeakSet, WeakSetVariable],
  [isObject, ObjectVariable]
])

const variableFactory = (name, value) => {
  if (isTypeNullVariable(value)) {
    return nullVariableType.get(value)(name)
  } else if (isVariable(name)) {
    return name
  }
  for (let [isTypeMatch, VariableConstructor] of variableTypeMap) {
    if (isTypeMatch(value)) {
      return new VariableConstructor(name, value)
    }
  }
}

module.exports = variableFactory

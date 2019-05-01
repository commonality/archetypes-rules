const ArrayVariable = require('./array-variable')
const DateVariable = require('./date-variable')
const ErrorVariable = require('./error-variable')
const is = require('@sindresorhus/is')
const MapVariable = require('./map-variable')
const NumberVariable = require('./number-variable')
const ObjectVariable = require('./object-variable')
const SetVariable = require('./set-variable')
const StringVariable = require('./string-variable')
const SymbolVariable = require('./symbol-variable')
const WeakMapVariable = require('./weak-map-variable')
const WeakSetVariable = require('./weak-set-variable')
/* eslint-disable-next-line max-len */
const getNullVariableOrReference = require('./helpers/get-null-variable-or-reference')

const variableTypeMap = new Map([
  [Array.isArray, ArrayVariable],
  [is.date, DateVariable],
  [is.error, ErrorVariable],
  [is.map, MapVariable],
  [is.number, NumberVariable],
  [is.set, SetVariable],
  [is.string, StringVariable],
  [is.symbol, SymbolVariable],
  [is.weakMap, WeakMapVariable],
  [is.weakSet, WeakSetVariable],
  [is.object, ObjectVariable]
])

const variableFactory = (name, value) => {
  let variable = getNullVariableOrReference(name, value)
  if (is.nullOrUndefined(variable)) {
    for (let [isTypeMatch, VariableConstructor] of variableTypeMap) {
      if (isTypeMatch(value)) {
        variable = new VariableConstructor(name, value)
        break
      }
    }
  }
  return variable
}

module.exports = variableFactory

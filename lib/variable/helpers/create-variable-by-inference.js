import { isObject } from 'es-toolkit/compat'
import {
  isDate,
  isError,
  isMap,
  isNumber,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isWeakMap,
  isWeakSet
} from 'es-toolkit/predicate'
import ArrayVariable from '../array-variable'
import BigIntVariable from '../bigint-variable'
import DateVariable from '../date-variable'
import ErrorVariable from '../error-variable'
import MapVariable from '../map-variable'
import NumberVariable from '../number-variable'
import ObjectVariable from '../object-variable'
import PromiseVariable from '../promise-variable'
import RegExpVariable from '../regexp-variable'
import SetVariable from '../set-variable'
import StringVariable from '../string-variable'
import SymbolVariable from '../symbol-variable'
import WeakMapVariable from '../weak-map-variable'
import WeakSetVariable from '../weak-set-variable'

const isBigInt = value => typeof value === 'bigint'

const variableTypeMap = new Map([
  [Array.isArray, ArrayVariable],
  [isBigInt, BigIntVariable],
  [isDate, DateVariable],
  [isError, ErrorVariable],
  [isMap, MapVariable],
  [isNumber, NumberVariable],
  [isPromise, PromiseVariable],
  [isRegExp, RegExpVariable],
  [isSet, SetVariable],
  [isString, StringVariable],
  [isSymbol, SymbolVariable],
  [isWeakMap, WeakMapVariable],
  [isWeakSet, WeakSetVariable],
  [isObject, ObjectVariable]
])

const createVariableByInference = (name, value) => {
  for (const [isTypeMatch, VariableConstructor] of variableTypeMap) {
    if (isTypeMatch(value)) {
      return new VariableConstructor(name, value)
    }
  }
  return null
}

export default createVariableByInference

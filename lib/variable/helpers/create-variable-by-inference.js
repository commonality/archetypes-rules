import is from '@sindresorhus/is'

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

const variableTypeMap = new Map([
  [Array.isArray, ArrayVariable],
  [is.bigint, BigIntVariable],
  [is.date, DateVariable],
  [is.error, ErrorVariable],
  [is.map, MapVariable],
  [is.number, NumberVariable],
  [is.promise, PromiseVariable],
  [is.regExp, RegExpVariable],
  [is.set, SetVariable],
  [is.string, StringVariable],
  [is.symbol, SymbolVariable],
  [is.weakMap, WeakMapVariable],
  [is.weakSet, WeakSetVariable],
  [is.object, ObjectVariable]
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

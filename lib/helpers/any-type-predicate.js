// import ow from 'ow'
import ow from 'ow'

const predicates = [
  ow.any,
  ow.array,
  ow.arrayBuffer,
  ow.bigint,
  ow.boolean,
  ow.buffer,
  ow.dataView,
  ow.date,
  ow.error,
  ow.float32Array,
  ow.float64Array,
  ow.function,
  ow.int16Array,
  ow.int32Array,
  ow.int8Array,
  ow.iterable,
  ow.map,
  ow.nan,
  ow.null,
  ow.nullOrUndefined,
  ow.number,
  ow.object,
  ow.promise,
  ow.regExp,
  ow.set,
  ow.sharedArrayBuffer,
  ow.string,
  ow.symbol,
  ow.typedArray,
  ow.uint16Array,
  ow.uint32Array,
  ow.uint8Array,
  ow.uint8ClampedArray,
  ow.undefined,
  ow.weakMap,
  ow.weakSet
]

const anyTypePredicate = ow.any(...predicates)
export default anyTypePredicate

import hasIn from 'lodash.hasin'
import typeMap from './type-map'

const isValueTypeOf = (value, type) => {
  if (hasIn(value, 'value')) {
    return typeMap.get(type)(value.value)
  }
  return typeMap.get(type)(value)
}

export default isValueTypeOf

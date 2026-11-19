import { hasIn } from 'es-toolkit/compat'
import typeMap from './type-map'

const isTypeOf = (value, type) => {
  if (hasIn(value, 'type')) {
    return value.type === type
  }
  return typeMap.get(type)(value)
}

export default isTypeOf

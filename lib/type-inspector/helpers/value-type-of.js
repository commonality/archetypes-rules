import is from '@sindresorhus/is'
import { hasIn } from 'es-toolkit/compat'

const valueTypeOf = value => {
  if (hasIn(value, 'value')) {
    return is(value.value)
  }
  return is(value)
}

export default valueTypeOf

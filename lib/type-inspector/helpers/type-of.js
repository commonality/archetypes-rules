import is from '@sindresorhus/is'
import hasIn from 'es-toolkit/compat/hasIn'

const typeOf = value => {
  if (hasIn(value, 'type')) {
    return value.type
  }
  return is(value)
}

export default typeOf

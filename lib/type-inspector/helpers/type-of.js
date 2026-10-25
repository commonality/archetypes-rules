import is from '@sindresorhus/is'
import hasIn from 'lodash.hasin'

const typeOf = value => {
  if (hasIn(value, 'type')) {
    return value.type
  }
  return is(value)
}

export default typeOf

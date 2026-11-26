import { isEmpty } from 'es-toolkit/compat'
import kebabCase from 'es-toolkit/compat/kebabCase'
import { isDate, isNotNil } from 'es-toolkit/predicate'

const UNKNOWN = 'no-entry/unknown'

const format = {
  key(name) {
    return kebabCase(name)
  },

  value(val) {
    let formatedVal = UNKNOWN
    if (Array.isArray(val) && !isEmpty(val)) {
      formatedVal = val.join(', ')
    } else if (isDate(val)) {
      formatedVal = val.toISOString()
    } else if (isNotNil(val)) {
      formatedVal = `${val}`
    }
    return formatedVal?.trim()
  }
}

export default format

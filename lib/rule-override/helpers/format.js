const is = require('@sindresorhus/is')
const kebabCase = require('lodash.kebabcase')

const UNKNOWN = 'no-entry/unknown'

const format = {
  key (name) {
    return kebabCase(name)
  },

  value (val) {
    let formatedVal = UNKNOWN
    if (Array.isArray(val) && is.nonEmptyArray(val)) {
      formatedVal = val.join(', ')
    } else if (is.date(val)) {
      formatedVal = val.toISOString()
    }
    return formatedVal
  }
}

module.exports = format

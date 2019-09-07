const {
  date,
  isValid,
  nonEmptyArray
} = require('ow')
const kebabCase = require('lodash.kebabcase')

const UNKNOWN = 'no-entry/unknown'

const format = {
  key (name) {
    return kebabCase(name)
  },

  value (val) {
    let formatedVal = UNKNOWN
    if (Array.isArray(val) && isValid(val, nonEmptyArray)) {
      formatedVal = val.join(', ')
    } else if (isValid(val, date)) {
      formatedVal = val.toISOString()
    }
    return formatedVal
  }
}

module.exports = format

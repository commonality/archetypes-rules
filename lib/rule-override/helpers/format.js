const isDate = require('lodash.isdate')
const isEmpty = require('lodash.isempty')
const kebabCase = require('lodash.kebabcase')

const UNKNOWN = 'no-entry/unknown'

const format = {
  key (name) {
    return kebabCase(name)
  },

  value (val) {
    let formatedVal = UNKNOWN
    if (Array.isArray(val) && !isEmpty(val)) {
      formatedVal = val.join(', ')
    } else if (isDate(val)) {
      formatedVal = val.toISOString()
    }
    return formatedVal
  }
}

module.exports = format

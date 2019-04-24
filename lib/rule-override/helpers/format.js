const isDate = require('lodash.isdate')
const isEmpty = require('lodash.isempty')
const isNil = require('lodash.isnil')
const kebabCase = require('lodash.kebabcase')

const UNKNOWN = 'no-entry/unknown'

const format = {
  key (name) {
    if (name === 'ruleName') {
      return 'rule-override-name'
    }
    return kebabCase(name)
  },

  value (val) {
    if (Array.isArray(val)) {
      if (isEmpty(val)) {
        return UNKNOWN
      } else {
        return val.join(', ')
      }
    } else if (isDate(val)) {
      return val.toISOString()
    } else if (isNil(val)) {
      return UNKNOWN
    }
    return val
  }
}

module.exports = format

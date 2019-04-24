const isString = require('lodash.isstring')

const isTypeNullVariable = (value) => {
  if (isString(value)) {
    const val = value.toLowerCase()
    return val.startsWith('null') && val.endsWith('variable')
  }
  return false
}

module.exports = isTypeNullVariable

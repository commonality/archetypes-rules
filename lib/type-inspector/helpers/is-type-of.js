const hasIn = require('lodash.hasin')
const typeMap = require('./type-map')

const isTypeOf = (value, type) => {
  if (hasIn(value, 'type')) {
    return value.type === type
  }
  return typeMap.get(type)(value)
}

module.exports = isTypeOf

const hasIn = require('lodash.hasin')
const typeMap = require('./type-map')

const isValueTypeOf = (value, type) => {
  if (hasIn(value, 'value')) {
    return typeMap.get(type)(value.value)
  }
  return typeMap.get(type)(value)
}

module.exports = isValueTypeOf

const objectHasPropertyName = require('./object-has-property-name')
const typeMap = require('./type-map')

const isTypeOf = (value, type) => {
  if (objectHasPropertyName(value)) {
    return value.type === type
  }
  return typeMap.get(type)(value)
}

module.exports = isTypeOf

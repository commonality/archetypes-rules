const objectHasPropertyName = require('./object-has-property-name')
const typeMap = require('./type-map')

const isValueTypeOf = (instance, type) => {
  if (objectHasPropertyName(instance, 'value')) {
    return typeMap.get(type)(instance.value)
  }
  return typeMap.get(type)(instance)
}

module.exports = isValueTypeOf

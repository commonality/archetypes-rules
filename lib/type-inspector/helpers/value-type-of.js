const is = require('@sindresorhus/is')
const objectHasPropertyName = require('./object-has-property-name')

const valueTypeOf = (instance) => {
  if (objectHasPropertyName(instance, 'value')) {
    return is(instance.value)
  }
  return is(instance)
}

module.exports = valueTypeOf

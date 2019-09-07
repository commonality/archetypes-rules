const is = require('@sindresorhus/is')
const objectHasPropertyName = require('./object-has-property-name')

const typeOf = (value) => {
  if (objectHasPropertyName(value)) {
    return value.type
  }
  return is(value)
}

module.exports = typeOf

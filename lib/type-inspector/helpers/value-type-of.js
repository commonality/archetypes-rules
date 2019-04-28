const hasIn = require('lodash.hasin')
const is = require('@sindresorhus/is')

const valueTypeOf = (value) => {
  if (hasIn(value, 'value')) {
    return is(value.value)
  }
  return is(value)
}

module.exports = valueTypeOf

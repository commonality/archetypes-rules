const hasIn = require('lodash.hasin')
const is = require('@sindresorhus/is')

const typeOf = (value) => {
  if (hasIn(value, 'type')) {
    return value.type
  }
  return is(value)
}

module.exports = typeOf

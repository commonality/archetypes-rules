const get = require('lodash.get')
const is = require('@sindresorhus/is')

const getName = (item) => {
  let name = item
  if (is.object(item)) {
    name = get(item, 'name')
  }
  return name
}

module.exports = getName

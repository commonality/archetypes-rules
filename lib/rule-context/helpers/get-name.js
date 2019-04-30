const get = require('lodash.get')
const isObject = require('lodash.isobject')

const getName = (item) => {
  let name = item
  if (isObject(item)) {
    name = get(item, 'name')
  }
  return name
}

module.exports = getName

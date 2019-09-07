const get = require('lodash.get')
const {
  isValid,
  object
} = require('ow')

const getName = (item) => {
  let name = item
  if (isValid(item, object)) {
    name = get(item, 'name')
  }
  return name
}

module.exports = getName

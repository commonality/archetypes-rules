const get = require('lodash.get')
const {
  isValid,
  string
} = require('ow')

const getTypePredicate = (type, enumerator) =>
  isValid(get(enumerator, type), string)

module.exports = getTypePredicate

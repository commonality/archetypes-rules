const get = require('lodash.get')
const is = require('@sindresorhus/is')

const getTypePredicate = (type, enumerator) => is.string(get(enumerator, type))

module.exports = getTypePredicate

const get = require('lodash.get')
const ow = require('ow')

const excludedProperties = [
  ...Object.keys(ow),
  'any',
  'create',
  'isValid',
  'length',
  'name',
  'optional'
]

const dataTypePredicateMap = new Map()

const predicates = Object
  .getOwnPropertyNames(ow)
  .filter((key) => !excludedProperties.includes(key))
  .sort()

const initPredicateMap = (map) =>
  predicates.forEach((key) => {
    const predicate = get(ow, key)
    map.set(key, predicate)
  })

initPredicateMap(dataTypePredicateMap)

module.exports = dataTypePredicateMap

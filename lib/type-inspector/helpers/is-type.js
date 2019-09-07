const get = require('lodash.get')
const objectHasPropertyName = require('./object-has-property-name')
const types = require('./types.json')

const isType = (instance, type) =>
  objectHasPropertyName(instance) && instance.type === get(types, type)

module.exports = isType

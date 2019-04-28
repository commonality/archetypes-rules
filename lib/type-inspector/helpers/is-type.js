const get = require('lodash.get')
const hasIn = require('lodash.hasin')
const types = require('./types.json')

const isType = (object, type) =>
  hasIn(object, 'type') && object.type === get(types, type)

module.exports = isType

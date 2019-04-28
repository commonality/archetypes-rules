const assignTypeTo = require('./helpers/assign-type-to')
const create = require('./create')

const factory = {
  create
}

assignTypeTo(factory)

module.exports = factory

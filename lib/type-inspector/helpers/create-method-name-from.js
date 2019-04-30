const camelCase = require('lodash.camelcase')
const upperFirst = require('lodash.upperfirst')

const createMethodNameFrom = (type) => `is${upperFirst(camelCase(type))}`

module.exports = createMethodNameFrom

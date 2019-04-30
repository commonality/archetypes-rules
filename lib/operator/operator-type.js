const Operator = require('./operator')
const set = require('lodash.set')
const validOperators = require('./valid-operators.json')

const operatorType = new Map()

validOperators.forEach((name) => {
  operatorType.set(name, new Operator(name))
  set(operatorType, name, name)
})

module.exports = operatorType

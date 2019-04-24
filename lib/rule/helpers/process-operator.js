const invokePredicate = require('./invoke-predicate')

const processOperator = (stack, operator) => {
  invokePredicate(stack, operator.toOperationName())
}

module.exports = processOperator

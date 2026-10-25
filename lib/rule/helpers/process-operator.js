import invokePredicate from './invoke-predicate'

const processOperator = (stack, operator) => {
  invokePredicate(stack, operator.toOperationName())
}

export default processOperator

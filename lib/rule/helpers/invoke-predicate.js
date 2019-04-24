// import popPairFrom from './pop-pair-from'

// const operatorType = require('../operator/operator-type')

const popPairFrom = require('./pop-pair-from')
const invoke = require('lodash.invoke')

const invokePredicate = (stack, predicateName) => {
  if (predicateName === 'not') {
    const rhs = stack.pop()
    stack.push(rhs.not())
  } else {
    const { lhs, rhs } = popPairFrom(stack)
    const proposition = invoke(rhs, predicateName, lhs)
    stack.push(proposition)
  }
}

module.exports = invokePredicate

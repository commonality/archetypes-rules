import invoke from 'lodash.invoke'
import popPairFrom from './pop-pair-from'

const invokePredicate = (stack, predicateName) => {
  if (predicateName === 'not') {
    const rhs = stack.pop()
    stack.push(rhs.not())
    return
  }
  const { lhs, rhs } = popPairFrom(stack)
  const proposition = invoke(rhs, predicateName, lhs)
  stack.push(proposition)
}

export default invokePredicate

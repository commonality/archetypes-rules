const popPairFrom = (stack) => {
  return {
    lhs: stack.pop(),
    rhs: stack.pop()
  }
}

export default popPairFrom

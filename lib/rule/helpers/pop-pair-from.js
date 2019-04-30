const popPairFrom = (stack) => {
  return {
    lhs: stack.pop(),
    rhs: stack.pop()
  }
}

module.exports = popPairFrom

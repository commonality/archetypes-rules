const assignTypeTo = require('../helpers/assign-type-to')

class InvalidRuleElementError extends TypeError {
  constructor (message) {
    super(message)
    this.name = 'InvalidRuleElementError'
    assignTypeTo(this)
  }
}

module.exports = InvalidRuleElementError

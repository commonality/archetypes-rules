import assignTypeTo from '../helpers/assign-type-to'

/**
 * @extends TypeError
 * @memberof archetypes.rules
 * @property {string} message - Statement(s) about this error.
 */
class InvalidRuleElementError extends TypeError {
  /**
   * Create an InvalidRuleElementError.
   * @param {string} message - The notification message.
   * @memberof archetypes.rules.InvalidRuleElementError
   */
  constructor(message) {
    super(message)
    this.name = 'InvalidRuleElementError'
    assignTypeTo(this)
  }
}

export default InvalidRuleElementError

import assignTypeTo from '../helpers/assign-type-to'

/**
 * @extends TypeError
 * @memberof archetypes.rules
 * @property {String} message - Statement(s) about this error.
 */
class InvalidRuleElementError extends TypeError {
  /**
   * Create an InvalidRuleElementError.
   * @param {String} message - The notification message.
   * @memberof archetypes.rules.InvalidRuleElementError
   */
  constructor(message) {
    super(message)
    this.name = 'InvalidRuleElementError'
    assignTypeTo(this)
  }
}

export default InvalidRuleElementError

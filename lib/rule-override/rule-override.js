/* eslint-disable max-len */
const assignTypeTo = require('../helpers/assign-type-to')
const defaultRuleOverrideOptions = require('./helpers/default-rule-override-options')
// eslint-enable max-len

/**
 * @classdesc
 * Override a Rule within a RuleSet with a clear audit trail that explains
 * why and when a Rule was overridden.
 *
 * @class RuleOverride
 * @property {string} ruleName - The name of the Rule being overridden.
 * @property {boolean} override - Whether to override a Rule.
 * @property {Array.<string>} - A collection of PartySignatures for each
 * Person who has authorized the override.
 * @property {Object} [options=defaultRuleOverrideOptions] - Optional values.
 * @property {Array.<String>} options.raisedBy - The PartySignature of the
 * person who requested the override.
 * @property {Date} options.when - The date and time at which the Rule was
 * overridden.
 * @property {string} options.why - A human-readable reason that justifies (or
 * denies) overriding a Rule.
 */

class RuleOverride {
  constructor (name, override, options = defaultRuleOverrideOptions) {
    this.ruleName = name
    this.override = override
    assignTypeTo(this)
    Object.assign(this, options)
  }

  toString () {
    const {
      authorizedBy,
      override,
      raisedBy,
      ruleName,
      type,
      when,
      why
    } = this
    return `${type} OVERRIDES ${ruleName}, value = ${override}, authorized-by ${authorizedBy}, raised-by ${raisedBy}, when = ${when}, why = ${why}`
  }
}

module.exports = RuleOverride

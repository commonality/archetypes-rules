/* eslint-disable max-len */
const defaultRuleOverrideOptions = require('./helpers/default-rule-override-options')
const reducePropertiesToString = require('./helpers/reduce-properties-to-string')
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
    Object.assign(this, options)
  }

  toString () {
    return reducePropertiesToString(this)
  }
}

module.exports = RuleOverride

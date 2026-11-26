import ow from 'ow'
import assignTypeTo from '../helpers/assign-type-to'
import defaultRuleOverrideOptions from './helpers/default-rule-override-options'
import reducePropertiesToString from './helpers/reduce-properties-to-string'

// eslint-enable max-len

/**
 * Override a Rule within a RuleSet with a clear audit trail that explains why
 * and when a Rule was overridden.
 *
 * @property {String} ruleName - The name of the Rule being overridden.
 * @property {boolean} override - Whether to override a Rule.
 * @memberof archetypes.rules
 */

class RuleOverride {
  /**
   * Create a new RuleOverride.
   * @param {String} name - The name of the Rule being overridden.
   * @param {boolean} override - Whether to override a Rule.
   * @param {Object} [options=defaultRuleOverrideOptions] - Optional values.
   * @param {Array.<string>} [options.authorizedBy = new Array()] - A collection
   * of PartySignatures for each Person who has authorized the override.
   * @param {Array.<String>} [options.raisedBy = null] - The PartySignature of
   * the person who requested the override.
   * @param {Date} [options.when = new Date()] - The date and time at which the
   * Rule was overridden.
   * @param {String} [options.why = null] - A human-readable reason that
   * justifies (or denies) overriding a Rule.
   * @memberof archetypes.rules.RuleOverride
   */
  constructor(name, override, options = defaultRuleOverrideOptions) {
    ow(name, ow.string)
    ow(override, ow.boolean)
    this.ruleName = name
    this.override = override
    Object.assign(this, { ...defaultRuleOverrideOptions }, options)
    assignTypeTo(this)
  }

  /**
   * Whether to override a Rule.
   * @return {boolean}
   */
  get value() {
    return this.override
  }

  /**
   * Declare whether a Rule is overridden (`true`) or not (`false`).
   * @return {void}
   */
  set value(truthValue) {
    ow(truthValue, ow.boolean)
    this.override = truthValue
  }

  /**
   * Returns a consistent string representing the RuleOverride.
   *
   * @override
   * @method toString
   * @returns {String} All properties of this RuleOverride.
   * @memberof archetypes.rules.RuleOverride
   * @instance
   */
  toString() {
    return reducePropertiesToString(this)
  }
}

export default RuleOverride

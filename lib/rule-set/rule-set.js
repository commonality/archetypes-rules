import assignTypeTo from '../helpers/assign-type-to'
import definePropertyLength from '../helpers/define-property-length'

/**
 * A Set of unique {@link archetypes.rules.Rule Rules}.
 *
 * ⚠︎ No duplicate Rules are allowed.
 *
 * @memberof archetypes.rules
 * @property {Number} length - The number of Rules in the RuleSet.
 * @property {String} name - The title/name of the RuleSet.
 * @property {Object} rules - A collection of unique
 * {@link archetypes.rules.Rule Rules}.
 * @property {Object} ruleOverrides - A collection of
 * {@link archetypes.rules.RuleOverride RuleOverrides}.
 * @property {String} type - "archetypes.rules.RuleSet"
 */
class RuleSet {
  /**
   * Create a new RuleSet.
   * @param {String} name - The name of this RuleSet.
   */
  constructor(name) {
    this.name = name
    this.rules = {}
    definePropertyLength(this.rules)

    this.ruleOverrides = {}
    definePropertyLength(this.ruleOverrides)
    assignTypeTo(this)
  }

  /**
   * Add a Rule to the RuleSet.
   * @param {archetypes.rules.Rule} rule - The Rule to add.
   * @return {archetypes.rules.RuleSet} Reference to @this
   * archetypes.rules.RuleSet for method-chaining.
   */
  addRule(rule) {
    this.rules[rule.name] = rule
    return this
  }

  /**
   * Add a RuleOverride to the RuleSet.
   * @param {archetypes.rules.RuleOverride} override - The RuleOverride to add.
   * @return {archetypes.rules.RuleSet} Reference to @this
   * archetypes.rules.RuleSet for method-chaining.
   */
  addRuleOverride(override) {
    this.ruleOverrides[override.ruleName] = override
    return this
  }

  /**
   * Add a RuleOverride to the RuleSet.
   * @param {archetypes.rules.RuleContext} ruleContext - The RuleContext to
   * evaluate.
   * @return {archetypes.rules.Proposition} A Proposition with a truth-value.
   */
  evaluate(ruleContext) {
    Object.values(this.ruleOverrides).forEach(ruleOverride => {
      ruleContext.addRuleOverride(ruleOverride)
    })

    const propositions = Object.values(this.rules).map(rule =>
      rule.evaluate(ruleContext)
    )

    return propositions.reduce((prev, curr) => curr.or(prev))
  }

  toString() {}
}

export default RuleSet

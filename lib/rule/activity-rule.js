import Rule from './rule'

/**
 * Represents a type of {@linkcode archetypes.rules.Rule Rule} that
 * automatically executes an activity if its resulting
 * {@linkcode archetypes.rules.Proposition Proposition} evaluates to
 * <code>true</code>.
 *
 * @extends {archetypes.rules.Rule}
 * @memberof archetypes.rules
 * @param {string} name - The unique, namespaced moniker for the ActivityRule.
 */

class ActivityRule extends Rule {
  /**
   * @override
   * @method evaluate
   * @param {archetypes.rules.RuleContext} ruleContext - A fact to evaluate.
   * @returns {archetypes.rules.Proposition}
   * @memberof archetypes.rules.ActivityRule
   * @instance
   */

  evaluate(ruleContext) {
    const proposition = super.evaluate(ruleContext)
    if (proposition.value) {
      this.execute()
    }
    return proposition
  }

  /**
   * @description
   * Command-pattern that is invoked within a true evaluation.
   *
   * @abstract
   * @method execute
   * @returns {archetypes.rules.ActivityRule} Reference to itself.
   * @memberof archetypes.rules.ActivityRule
   * @instance
   */

  execute() {
    return this
  }
}

export default ActivityRule

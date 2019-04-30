const Rule = require('./rule')

/**
 * @classdesc
 * Represents a type of Rule that automatically executes
 * an activity if its resulting Proposition evaluates to true.
 *
 * @class ActivityRule
 * @abstract
 * @extends {Rule}
 */

class ActivityRule extends Rule {
  /**
   * @override
   *
   * @param {RuleContext} ruleContext - A fact to evaluate.
   * @returns {Proposition}
   * @memberof ActivityRule
   */

  evaluate (ruleContext) {
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
   * @returns {ActivityRule} - Reference to itself.
   * @memberof ActivityRule
   */

  execute () {
    return this
  }
}

module.exports = ActivityRule

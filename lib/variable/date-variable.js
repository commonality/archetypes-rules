import ow from 'ow'
import Variable from './variable'

/**
 * A DateVariable is a symbol that represents a single moment in time in a
 * platform-independent format.
 *
 * <p><img
 * src="https://gitlab.com/zaira-ardor-llc/docs/-/raw/main/media/icons/gitlab/status_warning.svg?ref_type=heads"
 * width="24" height="24" alt="Warning" /> With the introduction of the {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal Temporal}
 * API, the {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date Date} object is considered a legacy feature. Consider using Temporal
 * for new code and migrate existing code over to it if possible.
 *
 * @extends {archetypes.rules.Variable}
 * @memberof archetypes.rules
 * @property {string} name - The DateVariable's identifier.
 * @property {Date} value - A
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date Date}.
 * @property {string} type - "archetypes.rules.DateVariable" @readonly
 */

class DateVariable extends Variable {
  /**
   * @param {string} name - A unique string that expresses intent.
   * @param {Date} [value = new Date()] - A JavaScript primitive or Object type.
   * @memberof archetypes.rules.DateVariable
   */
  constructor(name, value = new Date()) {
    super(name, value, ow.any(ow.date, ow.string))
  }

  /**
   * Evaluate whether the current variable's Date value occurs after another
   * DateVariable's value.
   *
   * @param {archetypes.rules.DateVariable} dateVariable - Another variable to
   * be compared.
   * @returns {archetypes.rules.Proposition} A unique evaluation with a
   * truth-value.
   * @memberof archetypes.rules.DateVariable
   */

  after(dateVariable) {
    return this.gt(dateVariable)
  }

  /**
   * Evaluate whether the current variable's Date value occurs before another
   * DateVariable's value.
   *
   * @param {archetypes.rules.DateVariable} dateVariable - Another variable to
   * be compared.
   * @returns {archetypes.rules.Proposition} A unique evaluation with a
   * truth-value.
   * @memberof archetypes.rules.DateVariable
   */

  before(dateVariable) {
    return this.lt(dateVariable)
  }

  static createNullObject(name) {
    const variable = new DateVariable(name)
    variable.value = null
    return variable
  }
}

export default DateVariable

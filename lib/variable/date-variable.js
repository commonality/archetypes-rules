import ow from 'ow'
import Variable from './variable'

/**
 * @classdesc
 * A DateVariable is a symbol that represents a single moment in time in a
 * platform-independent format.
 *
 * > [!IMPORTANT]
 * >
 * > With the introduction of the Temporal API, the Date object is considered a legacy
 * > feature. Consider using Temporal for new code and migrate existing code over to it
 * > if possible.
 *
 * @abstract
 * @class Variable
 * @extends {RuleElement}
 * @param {string} name - A unique string that expresses intent.
 * @param {*} value - A JavaScript primitive or Object type.
 */

class DateVariable extends Variable {
  constructor(name, value = new Date()) {
    super(name, value, ow.any(ow.date, ow.string))
  }

  /**
   * Evaluate whether the current variable's Date value occurs after
   * another DateVariable's value.
   *
   * @param {DateVariable} dateVariable - Another variable to be compared.
   * @returns {Proposition} A unique evaluation with a truth-value.
   * @memberof DateVariable
   */

  after(dateVariable) {
    return this.gt(dateVariable)
  }

  /**
   * Evaluate whether the current variable's Date value occurs before
   * another DateVariable's value.
   *
   * @param {DateVariable} dateVariable - Another variable to be compared.
   * @returns {Proposition} A unique evaluation with a truth-value.
   * @memberof DateVariable
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

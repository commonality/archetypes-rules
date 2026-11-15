import ow from 'ow'
import anyTypePredicate from '../helpers/any-type-predicate'
import assignTypeTo from '../helpers/assign-type-to'

/**
 * @abstract
 * @extends {Object}
 * @property {String} name - The name of the archetypes.rules.RuleElement
 * @property {*} value - The value of the archetypes.rules.RuleElement
 * @property {String} type - The (fully namespaced) canonical name of this
 * RuleElement
 * @memberof archetypes.rules
 */
class RuleElement {
  /**
   * @constructor
   * @param {String} name - The RuleElement's name
   * @param {*} value - A value.
   * @param {ow.predicate} [typePredicate = anyTypePredicate] Accept any data
   * type, i.e., any of these
   * {@link https://sindresorhus.com/ow/types/Predicates.html Type alias Predicates}.
   * @memberof archetypes.rules.RuleElement
   */
  constructor(name, value, typePredicate = anyTypePredicate) {
    ow(value, typePredicate)
    this.name = name
    this.value = value
    assignTypeTo(this)
  }

  /**
   * Consistently express this RuleElement by name and value.
   *
   * @override
   * @method toString
   * @returns {String} This RuleElement instance's name and value.
   * @memberof archetypes.rules.RuleElement
   * @instance
   */
  toString() {
    const ruleElementName = this.constructor.name
    return `${ruleElementName} name = ${this.name}, value = ${this.value}`
  }

  /**
   * Provide a default value when passing a RuleElement instance.
   *
   * @override
   * @method valueOf
   * @returns {*} This RuleElement.prototype.value.
   * @memberof archetypes.rules.RuleElement
   * @instance
   */

  valueOf() {
    return this.value
  }
}

export default RuleElement

import ow from 'ow'
import anyTypePredicate from '../helpers/any-type-predicate'
import assignTypeTo from '../helpers/assign-type-to'

/**
 * @abstract
 * @extends {Object}
 * @property {string} name - The name of the archetypes.rules.RuleElement
 * @property {*} value - The value of the archetypes.rules.RuleElement
 * @property {string} type - The (fully namespaced) canonical name of this
 * RuleElement
 * @memberof archetypes.rules
 */
class RuleElement {

  /**
   * @constructor
   * @param {string} name - The RuleElement's name
   * @param {*} value - A value.
   * @param {ow.predicate} [typePredicate = anyTypePredicate] The data type.
   * @memberof archetypes.rules.RuleElement
   */
  constructor(name, value, typePredicate = anyTypePredicate) {
    ow(value, typePredicate)
    this.name = name
    this.value = value
    assignTypeTo(this)
  }

  /**
   * The Symbol.toPrimitive static data property represents the well-known
   * symbol Symbol. toPrimitive. All type coercion algorithms look up this
   * symbol on objects for the method that accepts a preferred type and returns
   * a primitive representation of the object, before falling back to using the
   * object's valueOf() and toString() methods.
   *
   * @method [Symbol.toPrimitive]
   * @returns { any } This RuleElement.prototype.value.
   * @memberof archetypes.rules.RuleElement
   * @instance
   * @example
   *
   * const element = new RuleElement('p', 23)
   * console.log(+element)
   * // => 23
   *
   */

  [Symbol.toPrimitive](hint) {
    if (hint === 'default' || hint === 'number') {
      return this.value
    }
    return this.toString()
  }

  /**
   * Consistently express this RuleElement by name and value.
   *
   * @override
   * @method toString
   * @returns {string} This RuleElement instance's name and value.
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

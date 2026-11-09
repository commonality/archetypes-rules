import ow from 'ow'
import anyTypePredicate from '../helpers/any-type-predicate'
import assignTypeTo from '../helpers/assign-type-to'

class RuleElement {
  constructor(name, value, typePredicate = anyTypePredicate) {
    ow(value, typePredicate)
    this.name = name
    this.value = value
    assignTypeTo(this)
  }

  /**
   * The Symbol.toPrimitive static data property represents the well-known symbol
   * Symbol. toPrimitive. All type coercion algorithms look up this symbol on
   * objects for the method that accepts a preferred type and returns a primitive
   * representation of the object, before falling back to using the object's
   * valueOf() and toString() methods.
   *
   * @example
   * ```js
   * const element = new RuleElement('p', 23)
   * console.log(+element)
   * // => 23
   * ```
   *
   * @returns { any } This RuleElement.prototype.value.
   * @memberof RuleElement
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
   * @returns { string }  This RuleElement instance's name and value.
   * @memberof RuleElement
   */
  toString() {
    const ruleElementName = this.constructor.name
    return `${ruleElementName} name = ${this.name}, value = ${this.value}`
  }

  /**
   * Provide a default value when passing a RuleElement instance.
   *
   * @returns { any } This RuleElement.prototype.value.
   * @memberof RuleElement
   */

  valueOf() {
    return this.value
  }
}

export default RuleElement

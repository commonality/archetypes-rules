const intersection = require('lodash.intersection')
const isEmpty = require('lodash.isempty')
const isEqual = require('lodash.isequal')
const Proposition = require('../proposition/proposition')
const Variable = require('./variable')
const includes = require('lodash.includes')
const ow = require('ow')

class ArrayVariable extends Variable {
  constructor (name, values = []) {
    super(name, values, ow.array)
  }

  /**
   * @override
   *
   * @param {ArrayVariable} arrayVariable - Another ArrayVariable to compare
   * against.
   * @returns {boolean} - True of all elements match, otherwise false.
   * @memberof ArrayVariable
   */

  equalTo (variable) {
    const value = isEqual(this.value, variable.value)
    return Proposition.factory(this, value, variable, '===')
  }

  greaterThan (variable) {
    const value = this.value.length > variable.value.length
    return Proposition.factory(this, value, variable, '>')
  }

  greaterThanOrEqualTo (variable) {
    const value = this.value.length >= variable.value.length
    return Proposition.factory(this, value, variable, '>=')
  }

  includes (variable) {
    const value = includes(this.value, ...variable.value)
    return Proposition.factory(this, value, variable, 'INCLUDES')
  }

  includesAny (variable) {
    const value = !isEmpty(intersection(this.value, variable.value))
    return Proposition.factory(this, value, variable, 'INCLUDES_ANY')
  }

  lessThan (variable) {
    const value = this.value.length < variable.value.length
    return Proposition.factory(this, value, variable, '<')
  }

  lessThanOrEqualTo (variable) {
    const value = this.value.length <= variable.value.length
    return Proposition.factory(this, value, variable, '<=')
  }

  notEqualTo (variable) {
    const proposition = Proposition.factory(this, true, variable, '!==')
    try {
      ow(variable.value, ow.array.not.deepEqual(this.value))
    } catch (err) {
      proposition.value = false
    }

    return proposition
  }

  static createNullObject (name) {
    const variable = new ArrayVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = ArrayVariable

const Variable = require('./variable')
const ow = require('ow')

class NumberVariable extends Variable {
  constructor (name, value = 0) {
    super(name, value, ow.number)
  }

  static createNullObject (name) {
    const variable = new NumberVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = NumberVariable

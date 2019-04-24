const Variable = require('./variable')
const ow = require('ow')

class StringVariable extends Variable {
  constructor (name, value = '') {
    super(name, value, ow.string)
  }

  static createNullObject (name) {
    const variable = new StringVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = StringVariable

const Variable = require('./variable')
const ow = require('ow')

class WeakMapVariable extends Variable {
  constructor (name, value = new WeakMap()) {
    super(name, value, ow.weakMap)
  }

  static createNullObject (name) {
    const variable = new WeakMapVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = WeakMapVariable

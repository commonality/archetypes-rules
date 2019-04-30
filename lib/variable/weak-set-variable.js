const Variable = require('./variable')
const ow = require('ow')

class WeakSetVariable extends Variable {
  constructor (name, value = new WeakSet()) {
    super(name, value, ow.weakSet)
  }

  static createNullObject (name) {
    const variable = new WeakSetVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = WeakSetVariable

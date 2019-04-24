const Variable = require('./variable')
const ow = require('ow')

class ObjectVariable extends Variable {
  constructor (name, value = {
  }) {
    super(name, value, ow.object)
  }

  static createNullObject (name) {
    const variable = new ObjectVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = ObjectVariable

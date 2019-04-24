const Variable = require('./variable')
const ow = require('ow')

class MapVariable extends Variable {
  constructor (name, value = new Map()) {
    super(name, value, ow.map)
  }

  static createNullObject (name) {
    const variable = new MapVariable(name)
    variable.value = null
    return variable
  }
}

module.exports = MapVariable

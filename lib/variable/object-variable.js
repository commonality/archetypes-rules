import ow from 'ow'
import Variable from './variable'

class ObjectVariable extends Variable {
  constructor(name, value = {}) {
    super(name, value, ow.object)
  }

  static createNullObject(name) {
    const variable = new ObjectVariable(name)
    variable.value = null
    return variable
  }
}

export default ObjectVariable

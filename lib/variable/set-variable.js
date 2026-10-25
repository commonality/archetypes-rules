import ow from 'ow'
import Variable from './variable'

class SetVariable extends Variable {
  constructor(name, value = new Set()) {
    super(name, value, ow.set)
  }

  static createNullObject(name) {
    const variable = new SetVariable(name)
    variable.value = null
    return variable
  }
}

export default SetVariable

import ow from 'ow'
import Variable from './variable'

class ErrorVariable extends Variable {
  constructor(name, value) {
    super(name, value, ow.error)
  }

  static createNullObject(name) {
    const variable = new ErrorVariable(name, new Error('NullErrorVariable'))
    variable.value = null
    return variable
  }
}

export default ErrorVariable

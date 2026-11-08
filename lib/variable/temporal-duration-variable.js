import { Temporal } from '@js-temporal/polyfill'
import Variable from './variable'

class TemporalDurationVariable extends Variable {
  constructor(name, value = new Temporal.Duration()) {
    super(name, value)
  }

  static createNullObject(name) {
    const variable = new TemporalDurationVariable(name)
    variable.value = null
    return variable
  }
}

export default TemporalDurationVariable

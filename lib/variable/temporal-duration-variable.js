import { Temporal } from '@js-temporal/polyfill'
import Variable from './variable'

/**
 * The
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal Temporal}
 * object enables date and time management in various scenarios, including
 * built-in time zone and calendar representation, wall-clock time conversions,
 * arithmetics, formatting, and more. It is designed as a full replacement for
 * the
 * {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date Date}
 * object.
 *
 * <p>The {@linkcode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration Temporal.Duration} object represents a difference between two time points, which
 * can be used in date/time arithmetic. It is fundamentally represented as a combination
 * of years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds,
 * and nanoseconds values.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 */
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

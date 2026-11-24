import Variable from './variable'

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant `Temporal.Instant`}
 * is semantically the same as
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date `Date`}.
 * They both encapsulate a single point in time, but `Temporal.Instant` is more
 * precise because it stores nanoseconds rather than milliseconds.
 * `Temporal.Instant` also avoids pitfalls of Date because it does not assume
 * any calendar or time zone information—if you want to read any date or time
 * information such as year or month, you need to convert it to a
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime `Temporal.ZonedDateTime`}
 * first, using
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toZonedDateTimeISO `toZonedDateTimeISO()`}.
 *
 * You can convert from `Date` to `Temporal.Instant` using the
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant `Date.prototype.toTemporalInstant()`}
 * method, which should be preferred over other methods such as
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochMilliseconds `Temporal.Instant.fromEpochMilliseconds()`}
 * because the former involves less user code and may be more optimized. You can
 * also convert from `Temporal.Instant` to `Date` using its epoch milliseconds,
 * such as `new Date(instant.epochMilliseconds)`.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The Temporal.Instant's identifier.
 * @property {Temporal.Instant} [value = new Date().toTemporalInstant()] - The
 * BigInt value for `epochNanoseconds`.
 */
class TemporalInstantVariable extends Variable {
  /**
   * @construct
   * @param {String} name - The name of the `TemporalInstantVariable`.
   * @param {BigInt} [value = new Date().toTemporalInstant()] - The
   * `epochNanoseconds`.
   */
  constructor(name, value = new Date().toTemporalInstant()) {
    super(name, value)
  }

  static createNullObject(name, epochNanoseconds) {
    const variable = new TemporalInstantVariable(name, epochNanoseconds)
    variable.value = null
    return variable
  }
}

export default TemporalInstantVariable

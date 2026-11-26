import { Temporal } from '@js-temporal/polyfill'
import { isString } from 'es-toolkit/predicate'
import ow from 'ow'
import Variable from './variable'

const temporalDurationParamsShape = {
  years: ow.absent.number,
  months: ow.absent.number,
  weeks: ow.absent.number,
  days: ow.absent.number,
  hours: ow.absent.number,
  minutes: ow.absent.number,
  seconds: ow.absent.number,
  milliseconds: ow.absent.number,
  microseconds: ow.absent.number,
  nanoseconds: ow.absent.number
}

const defaultToStringOptions = {
  fractionalSecondDigits: 'auto',
  roundingMode: 'trunc',
  smallestUnit: 'millisecond'
}

/**
 * The default parameters for Temporal.Duration.constructor.
 *
 * @namespace archetypes.rules
 * @default
 * @property {Number} [years = 0] - Number of years, or undefined (which is
 * treated as 0).
 * @property {Number} [months = 0] - Number of months, or undefined (which is
 * treated as 0).
 * @property {Number} [weeks = 0] - Number of weeks, or undefined (which is
 * treated as 0).
 * @property {Number} [days = 0] - Number of days, or undefined (which is
 * treated as 0).
 * @property {Number} [hours = 0] - Number of hours, or undefined (which is
 * treated as 0).
 * @property {Number} [minutes = 0] - Number of minutes, or undefined (which is
 * treated as 0).
 * @property {Number} [seconds = 0] - Number of seconds, or undefined (which is
 * treated as 0).
 * @property {Number} [milliseconds = 0] - Number of milliseconds, or undefined
 * (which is treated as <samp>0</samp>).
 * @property {Number} [microseconds = 0] - Number of microseconds, or undefined
 * (which is treated as <samp>0</samp>).
 * @property {Number} [nanoseconds = 0] - Number of nanoseconds, or undefined
 * (which is treated as <samp>0</samp>).
 */
const defaultTemporalDurationParams = {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  microseconds: 0,
  nanoseconds: 0
}

/**
 * Get/create a Temporal.Duration instance whenever the `value` parameter is
 * either has the exact shape of temporalDurationParamsShape, an instance of
 * `Temporal.Duration`, or a string.
 *
 * @private
 * @param {(String|temporalDurationParamsShape|Temporal.Duration)} value - The
 * value
 * @return {Temporal.Duration} A Temporal.Duration instance.
 * @throws {TypeError}
 */
const getTemporalDurationObject = value => {
  const { Duration } = Temporal
  ow(
    value,
    ow.any(
      ow.object.exactShape(temporalDurationParamsShape),
      ow.object.instanceOf(Duration),
      ow.string
    )
  )

  if (isString(value)) {
    return Duration.from(value)
  } else if (value[Symbol.toStringTag] === 'Temporal.Duration') {
    return value
  } else if (Object.getPrototypeOf(value) === Object.getPrototypeOf({})) {
    return new Duration(...Object.values(value))
  }
}

/**
 * The
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal `Temporal`}
 * object enables date and time management in various scenarios, including
 * built-in time zone and calendar representation, wall-clock time conversions,
 * arithmetics, formatting, and more. It is designed as a full replacement for
 * the
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date `Date`}
 * object.
 *
 * The
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration `Temporal.Duration`}
 * object represents a difference between two time points, which can be used in
 * date/time arithmetic. It is fundamentally represented as a combination of
 * `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`,
 * `milliseconds`, `microseconds`, and `nanoseconds` values.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The Temporal.Duration identifier.
 * @property {Temporal.Duration.prototype} value - A Temporal.Duration instance.
 */
class TemporalDurationVariable extends Variable {
  /**
   * @construct
   * @param {String} name - The name of the `TemporalDurationVariable`.
   * @param {(String|Object|Temporal.Duration)}
   * [value = defaultTemporalDurationParams] - Strings either must conform to
   * the
   * {@link https://en.wikipedia.org/wiki/ISO_8601#Durations ISO 8601 duration format},
   * or use an object for
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration `Temporal.Duration.constructor`}'s
   * parameters. (with some extensions specified by ECMAScript). The string has
   * the following form (spaces are only for readability and should not be
   * present in the actual string):
   * ```plain
   * ±P nY nM nW nD T nH nM nS
   * ```
   *
   * <figure><figcaption>Table 1: <strong>Samples of valid ISO 8601 duration formats</strong>.</figcaption>
   *
   * | ISO 8601 Duration Value | Meaning |
   * |---|---|
   * | <samp>P1Y1M1DT1H1M1.1S</samp> | 1 year, 1 month, 1 day, 1 hour, 1 minute, 1 second, and 100 milliseconds |
   * | <samp>P40D</samp> | 40 days |
   * | <samp>P1Y1D</samp> | 1 year and 1 day |
   * | <samp>P3DT4H59M</samp> | 3 days, 4 hours and 59 minutes |
   * | <samp>PT2H30M</samp> | 2 hours and 30 minutes |
   * | <samp>P1M</samp> | 1 month |
   * | <samp>PT1M</samp> | 1 minute |
   * | <samp>PT0.0021S</samp> | 2.1 milliseconds (2 milliseconds and 100 microseconds) |
   * | <samp>PT0S</samp> | Zero (canonical representation) |
   * | <samp>P0D</samp> | Zero |
   *
   * </figure>
   *
   * @param {number} value.years - Number of years, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.months - Number of months, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.weeks - Number of weeks, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.days - Number of days, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.hours - Number of hours, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.minutes - Number of minutes, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.seconds - Number of seconds, or `undefined` (which is
   * treated as <samp>0</samp>).
   * @param {number} value.milliseconds - Number of milliseconds, or `undefined`
   * (which is treated as <samp>0</samp>).
   * @param {number} value.microseconds - Number of microseconds, or `undefined`
   * (which is treated as <samp>0</samp>).
   * @param {number} value.nanoseconds - Number of nanoseconds, or `undefined`
   * (which is treated as <samp>0</samp>).
   *
   * @example
   * import { archetypes } from '@commonalities/archetypes-rules'
   *
   * import { TemporalDurationVariable } from archetypes.rules
   *
   * // ☑️ Valid: pass a string formatted as ISO 8601 duration.
   * let duration = new TemporalDurationVariable('valid-duration', 'P1M')
   *
   * // ☑️ Valid: pass an object with properties identical to Temporal.Duration's
   * //    constructor arguments.
   * const years = 0
   * const months = 1
   * const temporalDurationParams = { years, months }
   * duration = new TemporalDurationVariable('valid-duration', temporalDurationParams)
   *
   * // ☑️ Valid: pass a Temporal.Duration instance.
   * duration = new TemporalDurationVariable(
   *   'valid-duration',
   *   new Temporal.Duration(years, months)
   * )
   *
   * // 🚫 Invalid arguments passed
   * duration = new TemporalDurationVariable('invalid-duration', years, months)
   *
   * @throws
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError `TypeError`}
   */
  constructor(name, value = defaultTemporalDurationParams) {
    super(name, getTemporalDurationObject(value))
  }

  /**
   * Return the
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format ISO 8601 duration string format}.
   * @param {Object} options - An object containing some or all of the following
   * properties (in the order they are retrieved and validated)
   * @param {Number|String} [options.fractionalSecondDigits = 'auto']- Either an
   * integer from 0 to 9, or the string "auto". The default is "auto". If
   * "auto", then trailing zeros are removed from the fractional seconds.
   * Otherwise, the fractional part of the second component contains this many
   * digits, padded with zeros or rounded as necessary.
   * @param {String} [options.roundingMode = 'trunc'] - A string specifying how
   * to round off fractional second digits beyond fractionalSecondDigits. See
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode `Intl.NumberFormat()`}.
   * Defaults to "trunc".
   * @param {@enum} [options.smallestUnit = 'millisecond'] - A string specifying
   * the smallest unit to include in the output. Possible values are "second",
   * "millisecond", "microsecond", and "nanosecond", or their plural forms,
   * which are equivalent to fractionalSecondDigits values of 0, 3, 6, 9,
   * respectively. If specified, then fractionalSecondDigits is ignored.
   * @return {String} A string representing the given duration in the ISO 8601
   * format, with subsecond components formatted according to the options. The
   * zero duration is represented as "PT0S".
   *
   * @namespace archetypes.rules
   */
  toString(options = defaultToStringOptions) {
    return this.value.toString(options)
  }

  static createNullObject(name) {
    const variable = new TemporalDurationVariable(name)
    variable.value = null
    return variable
  }

  /**
   * Determine whether a given value follows valid ISO 8601 duration formatting
   * rules.
   *
   * @param {String} iso8601Duration - An ISO 8601 duration value to test.
   * Durations define the amount of intervening time in a time interval and are
   * represented by the format `P[n]Y[n]M[n]DT[n]H[n]M[n]S`, `P[n]W`, or
   * `P<date>T<time>`. In these representations, the <var>[n]</var> is replaced
   * by the value for each of the date and time elements that follow the
   * <var>[n]</var>. Leading zeros are not required, but the maximum number of
   * digits for each element should be agreed to by the communicating parties.
   * The capital letters _P_, _Y_, _M_, _W_, _D_, _T_, _H_, _M_, and _S_ are
   * designators for each of the date and time elements and are not replaced.
   */
  static isValid(iso8601Duration) {
    try {
      Temporal.Duration.from(iso8601Duration)
      return true
    } catch (_error) {
      return false
    }
  }
}

export default TemporalDurationVariable

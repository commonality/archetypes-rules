import { Temporal } from '@js-temporal/polyfill'
import Variable from './variable'

/**
 * @memberOf archetypes.rules.TemporalPlainDateTime
 * @inner
 * @name defaultTemporalPlainDateTimeOptions
 * @property {number} [year = new Date().getFullYear()] - The year value.
 * @property {number} [month = (new Date().getMonth() + 1)] - The month value.
 * @property {number} [day = new Date().getDate()] - The day value.
 * @property {number} hour - The hour value.
 * @property {number} minute - The minute value.
 * @property {number} second - The second value.
 * @property {number} millisecond - The millisecond value.
 * @property {number} microsecond - The microsecond value.
 * @property {number} nanosecond - The nanosecond value.
 * @property {number} calendar - The calendar value.
 */
const defaultTemporalPlainDateTimeOptions = (() => {
  const START = 0
  const END = 10
  const [year, month, day] = new Date()
    .toISOString()
    .slice(START, END)
    .split('-')
    .map(Number)
  return { year, month, day }
})()

/**
 * A
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime `Temporal.PlainDateTime`}
 * is essentially the combination of a
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate `Temporal.PlainDate`}
 * and a
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime `Temporal.PlainTime`}.
 * Because the date and time information don't have much interaction, all
 * general information about date properties is documented in the PlainDate
 * object, and all general information about time properties is documented in
 * the PlainTime object.
 *
 * If the date-time represents a specific instant that should remain invariant
 * across time zones, you should use the
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime `Temporal.ZonedDateTime`}
 * object instead. Use `Temporal.PlainDateTime` when you need to represent an
 * event happening at a specific wall-clock time that may be a different instant
 * in different time zones.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The `Temporal.PlainDateTime`'s identifier.
 * @property {Object} [value = defaultTemporalPlainDateTimeOptions] - A
 * `Temporal.PlainDateTime` object.
 */
class TemporalPlainDateTimeVariable extends Variable {
  /**
   * @construct
   * @param {String} name - The `Temporal.PlainDateTime`'s identifier.
   * @param {Object} [value = defaultTemporalPlainDateTimeOptions] - A
   * `Temporal.PlainDateTime` object.
   * @param {number} [value.year = new Date().getFullYear()] - The year value.
   * @param {number} [value.month = (new Date().getMonth() + 1)] - The month
   * value.
   * @param {number} [value.day = new Date().getDate()] - The day value.
   * @param {number} [value.hour] - The hour value.
   * @param {number} [value.minute] - The minute value.
   * @param {number} [value.second] - The second value.
   * @param {number} [value.millisecond] - The millisecond value.
   * @param {number} [value.microsecond] - The microsecond value.
   * @param {number} [value.nanosecond] - The nanosecond value.
   * @param {number} [value.calendar] - The calendar value.
   *
   * @example
   * import { archetypes } from '@commonlities/archetypes-rules'
   * const { TemporalPlainDateTimeVariable } = archetypes.rules
   *
   * const variable = new TemporalPlainDateTimeVariable(
   *   'plain-date-time-example', {
   *     year: 2025,
   *     month: 10,
   *     day: 28,
   *     hour: 1,
   *     minute: 30,
   *     second: 30
   *   }
   * )
   */
  constructor(name, value = defaultTemporalPlainDateTimeOptions) {
    const plainDate = new Temporal.PlainDateTime(...Object.values(value))
    super(name, plainDate)
  }

  static createNullObject(name, value = defaultTemporalPlainDateTimeOptions) {
    const variable = new TemporalPlainDateTimeVariable(name, value)
    variable.value = null
    return variable
  }
}

export default TemporalPlainDateTimeVariable

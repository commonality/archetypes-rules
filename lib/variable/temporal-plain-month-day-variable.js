import { Temporal } from '@js-temporal/polyfill'
import is from '@sindresorhus/is'
import ow from 'ow'
import Proposition from './proposition'
import Variable from './variable'

/**
 *
 * @memberOf archetypes.rules
 * @inner
 * @name defaultTemporalPlainMonthDayParams
 * @property {number} [month = (new Date().getMonth() + 1)] - A number,
 * truncated to an integer, representing the month in the ISO calendar system.
 * @property {number} [day = new Date().getDate()] - A number, truncated to an
 * integer, representing the day of the month in the ISO calendar system.
 * @property {String} [calendar = 'iso8601'] - A string representing the
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars calendar}
 * to use. <figure><figcaption>
 *
 * Table 1: **Supported calendar types**. These are all values that are commonly
 * supported by browsers for the calendar key. These values can be used for the
 * calendar option or the ca Unicode extension key when creating objects such as
 * Intl. DateTimeFormat, as well as for creating Temporal date objects. This
 * list is explicitly sanctioned by the ECMA-402 specification, so all
 * implementations should be consistent.
 *
 * </figcaption>
 *
 * | Value | Description |
 * |---|---|
 * | <samp>buddhist</samp> | Thai Buddhist calendar, proleptic. Month numbers, month codes, and days are the same as in the ISO 8601 calendar, but the epoch year is different. There is one era. |
 * | <samp>chinese</samp> | Traditional Chinese calendar, proleptic. Lunisolar calendar used in China based on data published by the Purple Mountain Observatory between 1900 and 2100 (which complies with GB/T 33661-2017 between 1912 and 2100), falling back to an implementation-defined approximation outside that range. The arithmetic year is identical to gregory, and there are no eras. |
 * | <samp>coptic</samp> | Coptic calendar, proleptic. Similar solar algorithm to ethioaa and ethiopic, with one era and a different epoch year. |
 * | <samp>dangi</samp> | Traditional Korean calendar, proleptic. Lunisolar calendar using months published by the Korea Astronomy and Space Science Institute (KASI) between 1900 and 2050, falling back to an implementation-defined approximation outside that range. The arithmetic year is identical to gregory, and there are no eras. |
 * | <samp>ethioaa</samp> | Ethiopic calendar, Amete Alem, proleptic. Similar solar algorithm to coptic and ethiopic, with one era and a different epoch year. |
 * | <samp>ethiopic</samp> | Ethiopic calendar, Amete Mihret, proleptic. Similar solar algorithm to coptic and ethioaa, with two eras and a different epoch year. |
 * | <samp>gregory</samp> | Gregorian calendar, proleptic. Solar calendar almost identical to the ISO 8601 calendar, except that it does not define week numbering and it contains two eras, one before the epoch year. |
 * | <samp>hebrew</samp> | Hebrew calendar, proleptic. Civil calendar with Tishrei as the first month of the year. Lunisolar calendar with one leap month inserted after month 5. There is one era. |
 * | <samp>indian</samp> | Indian national (or Śaka) calendar, proleptic. Solar calendar with one era. |
 * | <samp>islamic-civil</samp> | Hijri calendar, proleptic, tabular/rule-based with leap year rule II (leap years 2,5,7,10,13,16,18,21,24,26,29 in the 30-year cycle (1-based numbering)) and civil epoch (Friday July 16, 622 Julian / 0622-07-19 ISO) |
 * | <samp>islamic-tbla </samp>| Hijri calendar, proleptic, tabular/rule-based with leap year rule II (leap years 2,5,7,10,13,16,18,21,24,26,29 in the 30-year cycle (1-based numbering)) and astronomical epoch (Thursday July 15, 622 Julian / 0622-07-18 ISO) |
 * | <samp>islamic-umalqura</samp> | Hijri calendar, proleptic, Umm al-Qura. Lunar calendar using KACST-calculated months from the start of 1300 AH (1882-11-12 ISO) to the end of 1600 AH (2174-11-25 ISO), falling back to islamic-civil outside that range. |
 * | <samp>iso8601</samp> | ISO calendar (variant of the Gregorian calendar with week rules and formatting parameters made region-independent) |
 * | <samp>japanese</samp> | Japanese Imperial calendar (this calendar adds an era for each new emperor, so the output year and era for a future date may not match the input year and era when your code runs on a future engine version. Note: See the remarks below this table about dates prior to 1868-10-23 ISO.) |
 * | <samp>persian</samp> | Persian (or Solar Hijri) calendar, proleptic. There is one era. |
 * | <samp>roc</samp> | Republic of China (or Minguo) calendar, proleptic. Month numbers, month codes, and days are the same as in the ISO 8601 calendar, but the epoch year is different. There are two eras, one before the epoch year and one after. |
 *
 * </figure>
 *
 * See
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types `Intl.supportedValuesOf()`}
 * for a list of commonly supported calendar types. Defaults to `"iso8601"`.
 * Note that irrespective of the `calendar`, the `referenceYear`, `month`, and
 * `day` must be in the ISO 8601 calendar system.
 * @property {number} referenceYear - A number, truncated to an integer,
 * representing the year in the ISO calendar system. Defaults to
 * <samp>2026</samp>. The same ISO month-day can represent different dates in
 * different years with non-ISO calendars. For example, the days
 * <samp>2021-07-01</samp> and <samp>2026-07-01</samp> may fall on different
 * month-days in a non-Gregorian calendar, and just specifying
 * "<samp>07-01</samp>" is insufficient to unambiguously determine a month-day
 * in the target calendar. Therefore, you virtually always want to specify a
 * `referenceYear` when using a non-ISO calendar.
 *
 */
const defaultTemporalPlainMonthDayParams = (() => {
  const START = 0
  const END = 10
  const calendar = 'iso8601'
  const [, month, day] = new Date()
    .toISOString()
    .slice(START, END)
    .split('-')
    .map(Number)
  const referenceYear = undefined
  return { month, day, calendar, referenceYear }
})()

const defaultToStringOptions = {
  calendarName: 'auto'
}

/**
 * The
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay `Temporal.PlainMonthDay`}
 * object represents the month and day of a calendar date, without a year or
 * time zone; for example, an event on a calendar that recurs every year and
 * happens during the whole day. It is fundamentally represented as an ISO 8601
 * calendar date, with year, month, and day fields, and an associated calendar
 * system. The year is used to disambiguate the month-day in non-ISO calendar
 * systems.
 *
 * A `PlainMonthDay` is essentially the month-day part of a
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate `Temporal.PlainDate`}
 * object, without the year. Because the meaning of a month-day can change from
 * year to year (for example, whether it exists, or what the month-day of the
 * next day is), this object doesn't provide much functionality on its own, such
 * as comparison, addition, or subtraction. It doesn't even have a
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/month `month`}
 * property, because the month index is not meaningful without a year (for
 * example, two months from two years with the same index can have different
 * names in the case of leap months).
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 */
class TemporalPlainMonthDayVariable extends Variable {
  /**
   * @construct
   * @param {String} name - The identifier for the `Temporal.PlainMonthDay`
   * `value`.
   * @param {defaultTemporalPlainMonthDayParams} value - Valid
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay#parameters `Temporal.PlainMonthDay` constructor paramaters}.
   * @param {number} [value.month = (new Date().getMonth() + 1)] - A number,
   * truncated to an integer, representing the month in the ISO calendar system.
   * @param {number} [value.day = new Date().getDate()] - A number, truncated to
   * an integer, representing the day of the month in the ISO calendar system.
   * @param {String} [value.calendar = 'iso8601'] - A string representing the
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars calendar}
   * to use. See
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types `Intl.supportedValuesOf()`}
   * for a list of commonly supported calendar types. Defaults to `"iso8601"`.
   * Note that irrespective of the `calendar`, the `referenceYear`, `month`, and
   * `day` must be in the ISO 8601 calendar system.
   * @param {number} [value.referenceYear = undefined] - A number, truncated to
   * an integer, representing the year in the ISO calendar system. Defaults to
   * <samp>2026</samp>. The same ISO month-day can represent different dates in
   * different years with non-ISO calendars. For example, the days
   * <samp>2021-07-01</samp> and <samp>2026-07-01</samp> may fall on different
   * month-days in a non-Gregorian calendar, and just specifying
   * "<samp>07-01</samp>" is insufficient to unambiguously determine a month-day
   * in the target calendar. Therefore, you virtually always want to specify a
   * `referenceYear` when using a non-ISO calendar.
   */
  constructor(name, value = defaultTemporalPlainMonthDayParams) {
    ow(value, ow.object)
    const plainMonthDay = new Temporal.PlainMonthDay(...Object.values(value))
    super(name, plainMonthDay)
  }

  /**
   * Evaluate whether the current variable's value is the same as another
   * variable's value.
   *
   * `equalTo()` calls the `equals()` of
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay `Temporal.PlainMonthDay`}
   * instances, and returns `true` if this month-day is equivalent in value to
   * another month-day (in a form convertible by
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from `Temporal.PlainMonthDay.from()`}),
   * and `false` otherwise. They are compared both by their underlying ISO date
   * values and their calendars.
   *
   * @param {String|archetypes.rules.TemporalPlainMonthDayVariable} variable -
   * Another `TemporalPlainMonthDayVariable` to be compared, or a valid ISO 8601
   * formatted date string.
   * @returns {archetypes.rules.Proposition} A unique evaluation with a
   * truth-value.
   *
   * @example
   * import { archetypes } from @commonlities/archetypes-rules
   * const { TemporalPlainMonthDayVariable } = archetypes.rules
   *
   * const xmas = new TemporalPlainMonthDayVariable('Christmas', {
   *   month: 12, day: 25, calendar: 'gregory'
   * })
   * const copticXmas = new TemporalPlainMonthDayVariable('CopticChristmas', {
   *   month: 1, day: 7, calendar: 'coptic', referenceYear: 2026
   * })
   *
   * const proposition = xmas.equalTo(copticXmas)
   * // OR xmas.eq(copticXmas)
   * // Proposition name = (Christmas === CopticChristmas), value = false
   */
  equalTo(variable) {
    ow(
      variable,
      ow.any(ow.object.instanceOf(TemporalPlainMonthDayVariable), ow.string)
    )
    const plainMonthDay = is.string(variable.value)
      ? Temporal.PlainMonthDay.from(variable.value)
      : new Temporal.PlainMonthDay(...Object.values(variable.value))
    const value = this.value.equals(plainMonthDay)
    return Proposition.factory(this, value, variable, '===')
  }

  /**
   * Evaluate whether the current variable's value is the different from another
   * variable's value.
   *
   * @param {String|archetypes.rules.TemporalPlainMonthDayVariable} variable -
   * Another `TemporalPlainMonthDayVariable` to be compared, or a valid ISO 8601
   * formatted date string.
   * @returns {archetypes.rules.Proposition} A unique evaluation with a
   * truth-value.
   */
  notEqualTo(variable) {
    ow(
      variable,
      ow.any(ow.object.instanceOf(TemporalPlainMonthDayVariable), ow.string)
    )
    const plainMonthDay = is.string(variable.value)
      ? Temporal.PlainMonthDay.from(variable.value)
      : new Temporal.PlainMonthDay(...Object.values(variable.value))
    const value = !this.value.equals(plainMonthDay)

    return Proposition.factory(this, value, variable, '!==')
  }

  /**
   * The `toString()` method of `Temporal.PlainMonthDay` instances returns a
   * string representing this month-day in the
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format RFC 9557 format}.
   * @param {Object} [options] - An object containing the following property:
   * @param {Object} [options.calendarName = 'auto'] - Whether to show the
   * calendar annotation ([u-ca=calendar_id]) in the return value. Possible
   * values are:
   *
   * <dl>
   * <dt><code>"auto"</code> (default)
   * <dd>
   *
   * Include the calendar annotation if the calendar is not `"iso8601"`. The
   * reference year is included if the calendar is not `"iso8601"`.
   *
   * <dt><code>"always"</code>
   * <dd>
   *
   * Always include the calendar annotation. The reference year is always
   * included too.
   *
   * <dt><code>"never"</code>
   * <dd>
   *
   * Never include the calendar annotation. This makes the returned string not
   * recoverable to the same
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay `Temporal.PlainMonthDay`}
   * instance, although the month-day value still remains the same. The
   * reference year is included if the calendar is not `"iso8601"`.
   *
   * <dt><code>"critical"</code>
   * <dd>
   *
   * Always include the calendar annotation, and add a critical flag:
   * `[!u-ca=calendar_id]`. Useful when sending the string to certain systems,
   * but not useful for Temporal itself. The reference year is always included
   * too.
   *
   * </dl>
   *
   * @return {String} A string in the
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format RFC 9557 format}
   * representing this month-day. The calendar annotation is included as
   * specified. The reference year is included if a calendar annotation is
   * included or if the calendar is not `"iso8601"`.
   *
   * @throws
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError `RangeError`}
   * if any of the options is invalid.
   * @throws
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError `TypeError`}
   * if `options` is not an object or `undefined`.
   *
   * @example
   * import { archetypes } from '@commonlities/archetypes-rules'
   * const { TemporalPlainMonthDayVariable } = archetypes.rules
   *
   * const halloween = new TemporalPlainMonthDayVariable(
   *   'Halloween', {
   *     month: 10,
   *     day: 31,
   *     calendar: 'iso8601',
   *     referenceYear: 2026
   * })
   *
   * console.log(halloween.toString()
   * // TemporalPlainMonthDayVariable name = Halloween, value = 10-31
   *
   * console.log(halloween.toString({
   *   calendarName: 'auto'
   * }))
   * // TemporalPlainMonthDayVariable name = Halloween, value = 10-31
   *
   * console.log(halloween.toString({
   *   calendarName: 'always'
   * }))
   * // TemporalPlainMonthDayVariable name = Halloween, value = 2026-10-31[u-ca=iso8601]
   *
   * console.log(halloween.toString({
   *   calendarName: 'never'
   * }))
   * // TemporalPlainMonthDayVariable name = Halloween, value = 10-31
   *
   * console.log(halloween.toString({
   *   calendarName: 'critical'
   * }))
   * // TemporalPlainMonthDayVariable name = Halloween, value = 2026-10-31[!u-ca=iso8601]
   */
  toString(options = defaultToStringOptions) {
    const { name } = this.constructor
    return `${name} name = ${this.name}, value = ${this.value.toString(options)}`
  }

  /**
   * The `valueOf()` method of `Temporal.PlainMonthDay` instances throws a
   * `TypeError`, which prevents `Temporal.PlainMonthDay` instances from being
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion implicitly converted to primitives}
   * when used in arithmetic or comparison operations.
   * @throws
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError `TypeError`}
   * is _always_ thrown.
   */
  valueOf() {
    return this.value.valueOf()
  }

  static createNullObject(name, value = defaultTemporalPlainMonthDayParams) {
    const variable = new TemporalPlainMonthDayVariable(name, value)
    variable.value = null
    return variable
  }
}

export default TemporalPlainMonthDayVariable

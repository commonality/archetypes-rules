import { Temporal } from '@js-temporal/polyfill'
import Variable from './variable'

/**
 * @memberOf archetypes.rules
 * @name defaultTemporalPlainDateOptions
 * @property {number} [year = new Date().getFullYear()] - The year value.
 * @property {number} [month = (new Date().getMonth() + 1)] - The month value.
 * @property {number} [day = new Date().getDate()] - The day value.
 * @property {number} [calendar = 'iso8601'] - The calendar value.
 */
const defaultTemporalPlainDateOptions = (() => {
  const START = 0
  const END = 10
  const calendar = 'iso8601'
  const [year, month, day] = new Date()
    .toISOString()
    .slice(START, END)
    .split('-')
    .map(Number)
  return { year, month, day, calendar }
})()

/**
 * The
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate `Temporal.PlainDate`}
 * object represents a calendar date (a date without a time or time zone); for
 * example, an event on a calendar which happens during the whole day no matter
 * which time zone it's happening in. It is fundamentally represented as an ISO
 * 8601 calendar date, with year, month, and day fields, and an associated
 * calendar system.
 *
 * A `PlainDate` is essentially the date part of a
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime `Temporal.PlainDateTime`}
 * object, with the time information removed. Because the date and time
 * information don't have much interaction, all general information about date
 * properties is documented here.
 *
 * ### RFC 9557 format
 *
 * `PlainDate` objects can be serialized and parsed using the
 * {@link https://datatracker.ietf.org/doc/html/rfc9557 RFC 9557 format}, an
 * extension to the
 * {@link https://datatracker.ietf.org/doc/html/rfc3339 ISO 8601 / RFC 3339 format}.
 * The string has the following form (spaces are only for readability and should
 * not be present in the actual string):
 *
 * ```plain
 * YYYY-MM-DD [u-ca=CALENDAR_ID]
 * ```
 *
 * <dl>
 * <dt><code>YYYY</code>
 * <dd>Either a four-digit number, or a six-digit number with a
 * <samp>+</samp> or <samp>-</samp> sign.
 *
 * <dt><code>MM</code>
 * <dd>A two-digit number from <samp>01</samp> to <samp>12</samp>.
 *
 * <dt><code>DD</code>
 * <dd>A two-digit number from <samp>01</samp> to <samp>31</samp>.
 *
 * The `YYYY`, `MM`, and `DD` components can be separated by `-` or nothing.
 *
 * <dt><code>[u-ca=<var>CALENDAR_ID</var>]</code> <small>(optional)</small>
 * <dd>
 *
 * Replace <code><var>CALENDAR_ID</var></code> with the calendar to use. See
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types `Intl.supportedValuesOf()`}
 * for a list of commonly supported calendar types. Defaults to
 * `[u-ca=iso8601]`. May have a critical flag by prefixing the key with `!`:
 * e.g., `[!u-ca=iso8601]`. This flag generally tells other systems that it
 * cannot be ignored if they don't support it. The `Temporal` parser will throw
 * an error if the annotations contain two or more calendar annotations and one
 * of them is critical. Note that the `YYYY-MM-DD` is always interpreted as an
 * ISO 8601 calendar date and then converted to the specified calendar.
 *
 * </dl>
 *
 * <figure><figcaption>
 *
 * Table 1: <strong>Supported calendar types</strong>. This table lists all
 * <var>CALENDAR_ID</var> values commonly supported by browsers. These values
 * can be used for the calendar option or the ca Unicode extension key when
 * creating objects such as `Intl.DateTimeFormat`, as well as for creating
 * `Temporal` date objects. This list is explicitly sanctioned by the
 * {@link https://ecma-international.org/publications-and-standards/standards/ecma-402/ ECMA-402 specification},
 * so all implementations should be consistent.
 *
 * </figcaption>
 *
 * | <var>CALENDAR_ID</var>&nbsp;Value | Description |
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
 * As an input, you may optionally include the time, offset, and time zone
 * identifier, in the same format as
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format `Temporal.PlainDateTime`},
 * but they will be ignored. Other annotations in the `[key=value]` format are
 * also ignored, and they must not have the critical flag.
 *
 * When serializing, you can configure whether to display the calendar ID, and
 * whether to add a critical flag for it.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 */
class TemporalPlainDateVariable extends Variable {
  constructor(name, value = defaultTemporalPlainDateOptions) {
    const plainDate = new Temporal.PlainDate(...Object.values(value))
    super(name, plainDate)
  }

  static createNullObject(name, value = defaultTemporalPlainDateOptions) {
    const variable = new TemporalPlainDateVariable(name, value)
    variable.value = null
    return variable
  }
}

export default TemporalPlainDateVariable
export { defaultTemporalPlainDateOptions }

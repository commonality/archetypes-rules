const debug = require('debug')(
  '@archetypes/rules/variable/helpers/get-validated-number-value'
)
const ow = require('ow')

/**
 * Returns a Number.
 *
 * @private
 *
 * @param {@archetypes/rules/variable|number|string} variable - A valid
 * - Instance of @archetypes/rules/variable
 * - ECMAScript Number
 * - ECMAScript String
 * @throws {ArgumentError}
 * @returns {number} - The length of an ArrayVariable or string.
 */

const getValidatedNumberValue = (variable) => {
  const val = variable.valueOf()
  debug(`getValidatedNumberValue: variable.valueOf(): ${val}`)
  ow(val, ow.any(ow.array, ow.number, ow.string))
  if (Array.isArray(val) || ow.isValid(val, ow.string)) {
    debug(`getValidatedNumberValue => ${val.length}`)
    return val.length
  }
  debug(`getValidatedNumberValue => ${val}`)
  return val
}

module.exports = getValidatedNumberValue

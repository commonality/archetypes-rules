import is from '@sindresorhus/is'

/**
 * @private
 * @function isTypeNullVariable
 * @param {Array.<T> | Date | Error | Map | Number | Object | Set | String |
 * Symbol} value - A value
 *
 * @memberof archetypes.rules
 */
const isTypeNullVariable = value => {
  if (is.string(value)) {
    const val = value.toLowerCase()
    return val.startsWith('null') && val.endsWith('variable')
  }
  return false
}

export default isTypeNullVariable

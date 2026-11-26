import { isString } from 'es-toolkit/predicate'

/**
 * @private
 * @function isTypeNullVariable
 * @param {Array.<T> | Date | Error | Map | Number | Object | Set | String |
 * Symbol} value - A value
 *
 * @memberof archetypes.rules
 */
const isTypeNullVariable = value => {
  if (isString(value)) {
    const val = value.toLowerCase()
    return val.startsWith('null') && val.endsWith('variable')
  }
  return false
}

export default isTypeNullVariable

const {
  isValid,
  object
} = require('ow')

/**
 * Determine whether a value is an object with a given property.
 *
 * @private
 * @param {*} instance - An ECMAScript variable.
 * @param {string} [propertyName='type'] - The name of the property
 * being searched for.
 * @returns {boolean} - `true` if the property exists; otherwise, `false`.
 */

const objectHasPropertyName = (instance, propertyName = 'type') => {
  return isValid(instance, object) &&
    Object.getOwnPropertyNames(instance).includes(propertyName)
}

module.exports = objectHasPropertyName

const isObject = require('lodash.isobject')

const isObjectWithTypeAttr = (value) => isObject(value) &&
  value.hasOwnProperty('type')

module.exports = isObjectWithTypeAttr

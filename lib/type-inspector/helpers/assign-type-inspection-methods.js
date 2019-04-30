const createMethodNameFrom = require('./create-method-name-from')
const getTypePredicate = require('./get-type-predicate')
const isType = require('./is-type')
const set = require('lodash.set')

const assignTypeInspectionMethods = (typeInspector) => {
  Object.keys(typeInspector)
    .filter((type) => getTypePredicate(type, typeInspector))
    .forEach((type) => {
      const methodName = createMethodNameFrom(type)
      set(typeInspector, methodName, (object) => isType(object, type))
    })
}

module.exports = assignTypeInspectionMethods

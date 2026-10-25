import set from 'lodash.set'
import createMethodNameFrom from './create-method-name-from'
import getTypePredicate from './get-type-predicate'
import isType from './is-type'

const assignTypeInspectionMethods = typeInspector => {
  Object.keys(typeInspector)
    .filter(type => getTypePredicate(type, typeInspector))
    .forEach(type => {
      const methodName = createMethodNameFrom(type)
      set(typeInspector, methodName, object => isType(object, type))
    })
}

export default assignTypeInspectionMethods

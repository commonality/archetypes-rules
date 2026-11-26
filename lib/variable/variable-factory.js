/* eslint-disable max-len */

import { isNil } from 'es-toolkit/predicate'
import createVariableByInference from './helpers/create-variable-by-inference'

import getNullVariableOrReference from './helpers/get-null-variable-or-reference'

/**
 * Creates variable sub-types.
 * @memberof archetypes.rules
 */
const variableFactory = (name, value) => {
  const variable = getNullVariableOrReference(name, value)
  if (isNil(variable)) {
    return createVariableByInference(name, value)
  }
  return variable
}

export default variableFactory

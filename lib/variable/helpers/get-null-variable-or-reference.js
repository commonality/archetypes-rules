import isTypeNullVariable from './is-type-null-variable'
import isVariable from './is-variable'
import nullVariableType from './null-variable-type'

const getNullVariableOrReference = (name, value) => {
  let variable = null
  if (isTypeNullVariable(value)) {
    variable = nullVariableType.get(value)(name)
  } else if (isVariable(name)) {
    variable = name
  }
  return variable
}

export default getNullVariableOrReference

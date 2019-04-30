const isTypeNullVariable = require('./is-type-null-variable')
const isVariable = require('./is-variable')
const nullVariableType = require('./null-variable-type')

const getNullVariableOrReference = (name, value) => {
  let variable = null
  if (isTypeNullVariable(value)) {
    variable = nullVariableType.get(value)(name)
  } else if (isVariable(name)) {
    variable = name
  }
  return variable
}

module.exports = getNullVariableOrReference

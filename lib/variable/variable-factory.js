/* eslint-disable max-len */
const createVariableByInference = require('./helpers/create-variable-by-inference')
const { nullOrUndefined } = require('@sindresorhus/is')
const getNullVariableOrReference = require('./helpers/get-null-variable-or-reference')

const variableFactory = (name, value) => {
  let variable = getNullVariableOrReference(name, value)
  if (nullOrUndefined(variable)) {
    variable = createVariableByInference(name, value)
  }
  return variable
}

module.exports = variableFactory

const ow = require('ow')

const validateType = (variable, constructor) => {
  ow(variable, ow.object.instanceOf(constructor))
}

module.exports = validateType

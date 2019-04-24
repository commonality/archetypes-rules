const { enumFactory } = require('enum-nom-nommer')

const ruleLoaderType = enumFactory.create([
  'FILE',
  'JSON',
  'OBJECT'
])

module.exports = ruleLoaderType

const loadRuleFromObject = require('./load-rule-from-object')
const ow = require('ow')

const loadRuleFromJson = (json) => {
  ow(json, ow.string)

  return loadRuleFromObject(JSON.parse(json))
}

module.exports = loadRuleFromJson

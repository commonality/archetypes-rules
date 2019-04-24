const ow = require('ow')
const Rule = require('../../rule/rule')

const loadRuleFromObject = (data) => {
  ow(data, ow.object)

  return Object.assign(
    new Rule(data.name),
    data
  )
}

module.exports = loadRuleFromObject

const loadRuleElements = require('./load-rule-elements')
const ow = require('ow')
const Rule = require('../../rule/rule')

const loadRuleFromObject = (data) => {
  ow(data, ow.object)

  const {name, elements} = data
  const rule = new Rule(name)
  loadRuleElements(elements, rule)

  return rule
}

module.exports = loadRuleFromObject

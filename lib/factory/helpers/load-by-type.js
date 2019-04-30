const loadRuleFromObject = require('./load-rule-from-object')
const loadRuleContextFromObject = require('./load-rule-context-from-object')
const loadRuleOverrideFromObject = require('./load-rule-override-from-object')
const loadRuleSetFromObject = require('./load-rule-set-from-object')
const {
  isRule,
  isRuleContext,
  isRuleOverride,
  isRuleSet
} = require('../../type-inspector/type-inspector')

const typeEvaluationMap = new Map([
  [
    (literal) => isRule(literal),
    (literal) => loadRuleFromObject(literal)
  ],
  [
    (literal) => isRuleContext(literal),
    (literal) => loadRuleContextFromObject(literal)
  ],
  [
    (literal) => isRuleOverride(literal),
    (literal) => loadRuleOverrideFromObject(literal)
  ],
  [
    (literal) => isRuleSet(literal),
    (literal) => loadRuleSetFromObject(literal)
  ]
])

const loadByType = (literal) => {
  for (let [isType, loadObjectFrom] of typeEvaluationMap) {
    if (isType(literal)) {
      return loadObjectFrom(literal)
    }
  }
}

module.exports = loadByType

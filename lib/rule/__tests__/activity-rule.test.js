const ActivityRule = require('../activity-rule.js')
const RuleContext = require('../../rule-context/rule-context')

describe('ActivityRule', () => {
  describe('is an "abstract" extension of Rule', () => {
    describe('execute', () => {
      it('is an "abstract" method that invokes an action', () => {
        const activityRule = new ActivityRule('activity-rule-execute-test')
        const rule = activityRule.execute()
        expect(activityRule).toBe(rule)
      })
      it('is invoked whenever "evaluate" returns a true Proposition', () => {
        const activityRule = new ActivityRule('activity-rule-invocation-test')
        activityRule.execute = jest.fn()
        activityRule.addProposition('p', true)

        const fact = new RuleContext('activity-rule-invocation-test')
        fact.addProposition('p', false)

        activityRule.evaluate(fact)
        expect(activityRule.execute).not.toHaveBeenCalled()

        fact.findElement('p').value = true

        activityRule.evaluate(fact)
        expect(activityRule.execute).toHaveBeenCalled()
      })
    })
  })
})

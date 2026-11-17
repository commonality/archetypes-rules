import { jest } from '@jest/globals'
import RuleContext from '../../rule-context/rule-context'
import ActivityRule from '../activity-rule.js'

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

        const context = new RuleContext('activity-rule-invocation-test')
        context.addProposition('p', true)

        activityRule.evaluate(context)
        expect(activityRule.execute).toHaveBeenCalled()
      })
    })
  })
})

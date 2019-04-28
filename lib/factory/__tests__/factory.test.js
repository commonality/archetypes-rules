/* eslint-disable max-len */

const isError = require('lodash.iserror')
const factory = require('../factory')
const Rule = require('../../rule/rule')
const RuleContext = require('../../rule-context/rule-context')
const RuleOverride = require('../../rule-override/rule-override')
const RuleSet = require('../../rule-set/rule-set')

describe('factory', () => {
  describe('fromFile', () => {
    describe('reads JSON and', () => {
      it('creates a Fact instance (as RuleContext)', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.fact.json')
        const fact = await factory.create.fromFile(filePath)
        expect(fact).toBeInstanceOf(RuleContext)
        done()
      })
      it('creates a Rule instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.rule.json')
        const rule = await factory.create.fromFile(filePath)
        expect(rule).toBeInstanceOf(Rule)
        done()
      })
      it('creates a RuleContext instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.rule-context.json')
        const ruleContext = await factory.create.fromFile(filePath)
        expect(ruleContext).toBeInstanceOf(RuleContext)
        done()
      })
      it('creates a RuleOverride instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-kp.rule-override.json')
        const ruleOverride = await factory.create.fromFile(filePath)
        expect(ruleOverride).toBeInstanceOf(RuleOverride)
        done()
      })
      it('creates a RuleSet instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.rule-set.json')
        const ruleSet = await factory.create.fromFile(filePath)
        expect(ruleSet).toBeInstanceOf(RuleSet)
        done()
      })

      describe('when a file cannot be found', () => {
        it('returns an error', async (done) => {
          const literal = await factory.create.fromFile('/nothing.json')
          expect(isError(literal)).toBe(true)
          done()
        })
      })
    })
  })
})

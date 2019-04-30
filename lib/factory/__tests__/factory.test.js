/* eslint-disable max-len */
const af = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/AF.json')
const isError = require('lodash.iserror')
const factory = require('../factory')
const Operator = require('../../operator/operator')
const Proposition = require('../../proposition/proposition')
const Rule = require('../../rule/rule')
const RuleContext = require('../../rule-context/rule-context')
const RuleOverride = require('../../rule-override/rule-override')
const RuleSet = require('../../rule-set/rule-set')
const WeakSetVariable = require('../../variable/weak-set-variable')

describe('factory', () => {
  describe('createFromFile', () => {
    describe('reads JSON and', () => {
      it('creates a Fact instance (as RuleContext)', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.fact.json')
        const fact = await factory.createFromFile(filePath)
        expect(fact).toBeInstanceOf(RuleContext)
        done()
      })
      it('creates a Rule instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.rule.json')
        const rule = await factory.createFromFile(filePath)
        expect(rule).toBeInstanceOf(Rule)
        done()
      })
      it('creates a RuleContext instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.rule-context.json')
        const ruleContext = await factory.createFromFile(filePath)
        expect(ruleContext).toBeInstanceOf(RuleContext)
        done()
      })
      it('creates a RuleOverride instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-kp.rule-override.json')
        const ruleOverride = await factory.createFromFile(filePath)
        expect(ruleOverride).toBeInstanceOf(RuleOverride)
        done()
      })
      it('creates a RuleSet instance', async (done) => {
        const filePath = require.resolve('../helpers/__tests__/__fixtures__/do-not-travel-list.rule-set.json')
        const ruleSet = await factory.createFromFile(filePath)
        expect(ruleSet).toBeInstanceOf(RuleSet)
        done()
      })

      describe('when a file cannot be found', () => {
        it('returns an error', async (done) => {
          const literal = await factory.createFromFile('/nothing.json')
          expect(isError(literal)).toBe(true)
          done()
        })
      })
    })
  })

  describe('fromObject', () => {
    describe('when given an object literal', () => {
      it('creates a prototypal instance', () => {
        const rule = factory.createFromObject(af)
        expect(rule).toBeInstanceOf(Rule)
        expect(rule.elements.length).toBe(af.elements.length)
      })
    })
  })

  describe('operator', () => {
    it('creates an Operator prototype from a valid Operator name', () => {
      const element = factory.createOperator('AND')
      expect(element).toBeInstanceOf(Operator)
    })
  })

  describe('proposition', () => {
    it('creates a Proposition prototype', () => {
      const element = factory.createProposition('p')
      expect(element).toBeInstanceOf(Proposition)
      expect(element.value).toBe(false)
    })
  })

  describe('variable', () => {
    it('creates a Variable sub-type', () => {
      const element = factory.createVariable('weak-set', new WeakSet())
      expect(element).toBeInstanceOf(WeakSetVariable)
    })
  })
})

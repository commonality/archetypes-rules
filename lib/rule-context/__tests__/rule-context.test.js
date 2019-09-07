/* eslint-disable max-lines-per-function */

const Proposition = require('../../proposition/proposition')
const StringVariable = require('../../variable/string-variable')
const RuleContext = require('../rule-context')
const RuleOverride = require('../../rule-override/rule-override')

describe('@archetypes/rules/RuleContext', () => {
  describe('represents a fact in time, where', () => {
    describe('name: string', () => {
      it('identifies the fact', () => {
        const ruleContext = new RuleContext('fact')
        expect(ruleContext.name).toBe('fact')
      })
    })

    describe('elements: Map', () => {
      it('is a Map of Propositions and Variables', () => {
        const fact = new RuleContext('fact')
        expect(fact.elements).toBeDefined()
      })
    })

    describe('overrides: Object<String, RuleOverride>', () => {
      it('is a dictionary of RuleOverrides', () => {
        const ruleOverridesFact = new RuleContext('rule-overrides-fact')
        ruleOverridesFact.addRuleOverride(
          new RuleOverride('another-fact', true)
        )
        const ONE = 1
        expect(ruleOverridesFact.overrides.length).toBe(ONE)
      })
    })

    describe('addProposition(n: string, v: boolean)', () => {
      it('puts a new proposition to its "elements" Map', () => {
        const addPropositionFact = new RuleContext('add-proposition-fact')
        addPropositionFact.addProposition('proposition', false)
        const ruleElement = addPropositionFact.findElement({
          name: 'proposition'
        })
        expect(ruleElement).toBeInstanceOf(Proposition)
      })
    })

    describe('addVariable(n: string, v: any)', () => {
      it('puts a Variable on its "elements" Map', () => {
        const addVariableFact = new RuleContext('add-variable-fact')
        addVariableFact.addVariable('foo', 'bar')
        const ruleElement = addVariableFact.findElement('foo')
        expect(ruleElement).toEqual({
          name: 'foo',
          type: '@archetypes/rules/StringVariable',
          value: 'bar'
        })

        expect(ruleElement).toBeInstanceOf(StringVariable)
      })
    })

    describe('append', () => {
      it('generates a new, merged Map of elements', () => {
        const sourceContext = new RuleContext('source')
        const destContext = new RuleContext('destination')

        sourceContext.addProposition('allHumansAreMortal', true)
        destContext.addProposition('socratesIsHuman', true)

        sourceContext.append(destContext)

        const RULE_ELEMENT_SIZE = 2
        expect(sourceContext.elements.length).toBe(RULE_ELEMENT_SIZE)
      })
    })

    describe('findElement(elem: RuleElement|String)', () => {
      it('returns an element', () => {
        const fact = new RuleContext('yet-another-fact')
        fact
          .addProposition('p', true)
          .addProposition('q', true)
          .addVariable('question', 'Did you mind your ps and qs?')

        expect(fact.findElement('p')).toBeDefined()
        expect(fact.findElement('q')).toBeDefined()
        expect(fact.findElement('question')).toBeDefined()
        expect(fact.findElement('answer')).toBeUndefined()
      })
    })

    describe('findRuleOverride(override: RuleOverride|String)', () => {
      let context = null
      beforeEach(() => {
        context = new RuleContext('find-rule-override-by-name')
        context.addRuleOverride(new RuleOverride('override-test', true))
      })

      afterEach(() => {
        context = null
      })

      describe('when a RuleOverride exists', () => {
        it('returns the RuleOverride', () => {
          const override = context.findRuleOverride('override-test')
          expect(override).toBeDefined()
        })
      })

      describe('when a RuleOverride does NOT exist', () => {
        it('returns undefined', () => {
          const override = context.findRuleOverride('foobar')
          expect(override).toBeUndefined()
        })
      })
    })
  })
})

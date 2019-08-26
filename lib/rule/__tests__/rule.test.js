/* eslint-disable max-len,max-lines-per-function,max-statements */

const kp = require('./__fixtures__/travel/state/gov/advisories/KP.json')
const Operator = require('../../operator/operator')
const operatorType = require('../../operator/operator-type')
const Proposition = require('../../proposition/proposition')
const Rule = require('../rule')
const RuleContext = require('../../rule-context/rule-context')
const RuleOverride = require('../../rule-override/rule-override')
const variableFactory = require('../../variable/variable-factory')

describe('@archetypes/rules/Rule', () => {
  const ONE = 1
  let rule = null

  beforeEach(() => {
    rule = new Rule('eligible-for-airline-upgrade')
  })

  afterEach(() => {
    rule = null
  })
  describe('represents (business) constraints on (business) processes', () => {
    describe('by modeling Boolean logic and adding', () => {
      describe('Operators', () => {
        test('can be added by reference to an operator', () => {
          const operator = new Operator(operatorType.AND)
          rule.addOperator(operator)
          expect(rule.elements.length).toBe(ONE)
        })
        test('can be added by enumeration key', () => {
          rule.addOperator(operatorType.OR)
          expect(rule.elements.length).toBe(ONE)
        })
        test('can be added by name', () => {
          rule.addOperator('OR')
          expect(rule.elements.length).toBe(ONE)
          expect(rule.elements).toEqual([
            {
              'name': 'OR',
              'type': '@archetypes/rules/Operator'
            }
          ])
        })
      })
      describe('Propositions', () => {
        const TWO_RULE_ELEMENTS = 2

        it('can be added by reference to a Proposition', () => {
          expect(rule).toBeDefined()
          expect(rule.name).toBe('eligible-for-airline-upgrade')

          const propP = new Proposition('p', true)
          const propQ = new Proposition('q', true)

          rule.addProposition(propP).addProposition(propQ)

          expect(rule.elements.length).toBe(TWO_RULE_ELEMENTS)
        })
        it('can be added with a {name, value} pair', () => {
          rule.addProposition('p', true)
          rule.addProposition('q', true)
          expect(rule.elements.length).toBe(TWO_RULE_ELEMENTS)
          rule.elements.forEach((element) => {
            expect(element.type).toContain('Proposition')
          })
        })
      })

      describe('Variables', () => {
        it('can be added by reference to a Variable', () => {
          const element = variableFactory('set-variable', new Set())
          rule.addVariable(element)
          expect(rule.elements.length).toBe(ONE)
        })
        it('can be added with a {name, value} pair', () => {
          rule.addVariable('set-variable', new Set())
          expect(rule.elements.length).toBe(ONE)
        })
      })
    })
    describe('and when given RuleContexts (aka "Facts")', () => {
      describe('such as "passenger-eligible-for-upgrade"', () => {
        it('returns a Proposition', () => {
          rule = new Rule('passenger-eligible-for-upgrade')

          rule.addProposition('passenger-is-economy', true)
            .addProposition('passenger-is-gold-card-holder', true)
            .addProposition('passenger-is-silver-card-holder', true)
            .addOperator(operatorType.OR)
            .addOperator(operatorType.AND)

          const fact = new RuleContext('passenger-eligible-for-upgrade')

          fact.addProposition('passenger-is-economy', true)
            .addProposition('passenger-is-gold-card-holder', true)
            .addProposition('passenger-is-silver-card-holder', false)

          const result = rule.evaluate(fact)
          expect(Proposition.isProposition(result)).toBe(true)
        })
      })

      describe('that are complex', () => {
        it('returns a Proposition whose toString() describes the evaluation', () => {
          const PASSENGER_CARRY_ON_BAGGAGE_ALLOWANCE = 15.0
          const passengerCarryOnBaggageWeight = 10.0
          rule = new Rule('eligible-for-upgrade')
          rule
            .addProposition('passengerIsEconomy', true)
            .addProposition('passengerIsGoldCardHolder', true)
            .addProposition('passengerIsSilverCardHolder', true)
            .addOperator('OR')
            .addOperator('AND')
            .addVariable(
              'passengerCarryOnBaggageWeight',
              'NULL_NUMBER_VARIABLE'
            )
            .addVariable(
              'passengerCarryOnBaggageAllowance',
              PASSENGER_CARRY_ON_BAGGAGE_ALLOWANCE
            )
            .addOperator('LESS_THAN_OR_EQUAL_TO')
            .addOperator('AND')

          const fact = new RuleContext('eligible-for-upgrade')
          fact
            .addProposition('passengerIsEconomy', true)
            .addProposition('passengerIsGoldCardHolder', true)
            .addProposition('passengerIsSilverCardHolder', false)
            .addVariable(
              'passengerCarryOnBaggageWeight',
              passengerCarryOnBaggageWeight
            )
            .addVariable(
              'passengerCarryOnBaggageAllowance',
              'NULL_NUMBER_VARIABLE'
            )

          const eligibility = rule.evaluate(fact)
          expect(eligibility.value).toBe(true)
        })
      })

      describe('that contain RuleOverrides', () => {
        it('overrides the resulting evaluation', () => {
          const { name } = kp
          const travelRule = new Rule(name)
          const elementIndex = {
            ADVISORY: 0,
            AND: 4,
            DESTINATION: 1,
            EQ: 2,
            PROPOSITION: 3
          }
          const advisory = kp.elements[elementIndex.ADVISORY]
          const destination = kp.elements[elementIndex.DESTINATION]
          const eq = kp.elements[elementIndex.EQ]
          const doNotTravel = kp.elements[elementIndex.PROPOSITION]
          const and = kp.elements[elementIndex.AND]
          travelRule
            .addVariable(advisory.name, advisory)
            .addVariable(destination.name, destination)
            .addOperator(eq.name)
            .addProposition(doNotTravel.name, doNotTravel.value)
            .addOperator(and.name)
          const travelContext = new RuleContext(name)
          const travelOverride = new RuleOverride(name, true, {
            'why': 'Providing emergency humanitarian assistance under the protective power of Sweden.'
          })
          travelContext
            .addVariable(advisory.name, 'NULL_OBJECT_VARIABLE')
            .addVariable(destination.name, advisory)
            .addProposition(doNotTravel.name, doNotTravel.value)

          expect(travelRule.evaluate(travelContext).value).toBe(false)

          travelContext.addRuleOverride(travelOverride)
          const travelAllowed = travelRule.evaluate(travelContext)
          expect(travelAllowed.value).toBe(true)
        })
      })
    })
  })
})

/* eslint-disable max-len,max-statements */
/* eslint-disable security/detect-object-injection */

const af = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/AF.json')
const cf = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/CF.json')
const ht = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/HT.json')
const iq = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/IQ.json')
const ir = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/IR.json')
const kp = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/KP.json')
const ly = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/LY.json')
const ml = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/ML.json')
const sd = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/SD.json')
const so = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/SO.json')
const ss = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/SS.json')
const ve = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/VE.json')
const ye = require('../../rule/__tests__/__fixtures__/travel/state/gov/advisories/YE.json')
const Rule = require('../../rule/rule')
const RuleContext = require('../../rule-context/rule-context')
const RuleOverride = require('../../rule-override/rule-override')
const RuleSet = require('../rule-set.js')
const variableFactory = require('../../variable/variable-factory')

const bannedCountries = [
  af,
  cf,
  ht,
  iq,
  ir,
  kp,
  ly,
  ml,
  sd,
  so,
  ss,
  ve,
  ye
]
const deptOfStateDoNotTravelCountries = (() => {
  const rules = bannedCountries.map((country) => {
    const ISO_3166_INFO = 0
    const DESTINATION = 1
    const EQUAL_TO = 2
    const IS_TRAVEL_ALLOWED = 3
    const AND = 4
    const rule = new Rule(country.name)
    const iso3166 = country.elements[ISO_3166_INFO]
    const destination = country.elements[DESTINATION]
    const isTravelAllowed = country.elements[IS_TRAVEL_ALLOWED]
    rule
      .addVariable(variableFactory(iso3166.name, iso3166))
      .addVariable(variableFactory(destination.name, destination))
      .addOperator(country.elements[EQUAL_TO].name)
      .addProposition(isTravelAllowed.name, isTravelAllowed.value)
      .addOperator(country.elements[AND].name)

    return rule
  })
  const ruleSet = new RuleSet(
    'us-dept-of-state-do-not-travel-countries'
  )

  rules.forEach((rule) =>
    ruleSet.addRule(rule))
  return ruleSet
})()

describe('@archetypes/rules/RuleSet', () => {
  describe('is useful for grouping Rules (without duplicates)', () => {
    it('accepts one or more Rules', () => {
      expect(deptOfStateDoNotTravelCountries.rules.length)
        .toBe(bannedCountries.length)
    })
  })

  describe('allows RuleOverrides', () => {
    test('to be applied to Rules', () => {
      const kpRuleOverride = new RuleOverride('KP-travel-advisory', true, {
        why: 'Providing limited emergency services under the protective power of Sweden.'
      })

      deptOfStateDoNotTravelCountries.addRuleOverride(kpRuleOverride)

      const ruleContext = new RuleContext(
        'us-dept-of-state-do-not-travel-countries'
      )
      ruleContext
        .addVariable(variableFactory(kp.name, kp))
        .addProposition('is-travel-allowed', kpRuleOverride.override)

      const proposition = deptOfStateDoNotTravelCountries.evaluate(ruleContext)

      expect(proposition.value).toBe(true)
    })
  })
})

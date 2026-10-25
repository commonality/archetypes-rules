/* eslint-disable max-len */
/* eslint-disable security/detect-object-injection */

import af from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/AF.json' with {
  type: 'json'
}
import cf from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/CF.json' with {
  type: 'json'
}
import ht from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/HT.json' with {
  type: 'json'
}
import iq from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/IQ.json' with {
  type: 'json'
}
import ir from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/IR.json' with {
  type: 'json'
}
import kp from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/KP.json' with {
  type: 'json'
}
import ly from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/LY.json' with {
  type: 'json'
}
import ml from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/ML.json' with {
  type: 'json'
}
import sd from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/SD.json' with {
  type: 'json'
}
import so from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/SO.json' with {
  type: 'json'
}
import ss from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/SS.json' with {
  type: 'json'
}
import ve from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/VE.json' with {
  type: 'json'
}
import ye from '../../rule/__tests__/__fixtures__/travel/state/gov/advisories/YE.json' with {
  type: 'json'
}
import Rule from '../../rule/rule'
import RuleContext from '../../rule-context/rule-context'
import RuleOverride from '../../rule-override/rule-override'
import variableFactory from '../../variable/variable-factory'
import RuleSet from '../rule-set.js'

const bannedCountries = [af, cf, ht, iq, ir, kp, ly, ml, sd, so, ss, ve, ye]
const deptOfStateDoNotTravelCountries = (() => {
  const rules = bannedCountries.map(country => {
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
  const ruleSet = new RuleSet('us-dept-of-state-do-not-travel-countries')

  rules.forEach(rule => {
    ruleSet.addRule(rule)
  })
  return ruleSet
})()

describe('archetypes.rules.RuleSet', () => {
  describe('is useful for grouping Rules (without duplicates)', () => {
    it('accepts one or more Rules', () => {
      expect(deptOfStateDoNotTravelCountries.rules.length).toBe(
        bannedCountries.length
      )
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

/* eslint-disable max-len */

import Rule from '../../../rule/rule'
import loadRuleFromObject from '../load-rule-from-object'
import doNotTravelListError from './__fixtures__/do-not-travel-list.rule.error.json' with {
  type: 'json'
}
import doNotTravelList from './__fixtures__/do-not-travel-list.rule.json' with {
  type: 'json'
}

describe('loadRuleFromObject', () => {
  describe('is a factory mixin that', () => {
    it('creates a Rule from a Rule object literal', () => {
      const restrictedCountries = loadRuleFromObject(doNotTravelList)
      expect(restrictedCountries).toBeInstanceOf(Rule)
      expect(restrictedCountries.elements.length).toBe(
        doNotTravelList.elements.length
      )
    })
    it('throws an InvalidRuleElementError for bad types', () => {
      expect(() => {
        loadRuleFromObject(doNotTravelListError)
      }).toThrow()
    })
  })
})

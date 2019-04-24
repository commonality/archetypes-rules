const doNotTravelList = require('./__fixtures__/do-not-travel-list.json')
const loadRuleFromObject = require('../load-rule-from-object')
const Rule = require('../../../rule/rule')

describe('loadRuleFromObject', () => {
  describe('is a factory mixin that', () => {
    it('creates a Rule from a Rule object literal', () => {
      const restrictedCountries = loadRuleFromObject(doNotTravelList)
      expect(restrictedCountries).toBeInstanceOf(Rule)
      expect(restrictedCountries.elements.length)
        .toBe(doNotTravelList.elements.length)
    })
  })
})

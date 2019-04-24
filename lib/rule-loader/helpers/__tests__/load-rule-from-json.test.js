const doNotTravelList = require('./__fixtures__/do-not-travel-list.json')
const loadRuleFromJson = require('../load-rule-from-json.js')
const Rule = require('../../../rule/rule')

describe('loadRuleFromJson', () => {
  describe('when given a string in JavaScript Object Notation', () => {
    it('creates a Rule object', () => {
      const json = JSON.stringify(doNotTravelList)
      const restrictedCountries = loadRuleFromJson(json)
      expect(restrictedCountries).toBeInstanceOf(Rule)
      expect(restrictedCountries.elements.length)
        .toBe(doNotTravelList.elements.length)
    })
  })
})

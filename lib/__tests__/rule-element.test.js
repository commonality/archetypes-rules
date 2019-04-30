/* eslint-disable max-len */
const RuleElement = require('../rule-element.js')

describe('RuleElement', () => {
  describe('is an abstract representation of all properties common among Operators, Propositions, and Variables, with', () => {
    let ruleElement = null

    beforeEach(() => {
      ruleElement = new RuleElement('name', 'value')
    })

    afterEach(() => {
      ruleElement = null
    })

    it('"name" property', () => {
      expect(ruleElement.name).toBe('name')
    })
    it('"value" property', () => {
      expect(ruleElement.value).toBe('value')
    })
    it('"type" property', () => {
      expect(ruleElement.type).toBe('archetypes.rules.RuleElement')
    })

    describe('toString()', () => {
      it('outputs a string representation of the RuleElement', () => {
        expect(ruleElement.toString()).toBe(
          'RuleElement name = name, value = value'
        )
      })
    })
  })
})

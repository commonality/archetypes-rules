/* eslint-disable max-len */
import RuleElement from '../rule-element/rule-element'

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
    describe('valueOf()', () => {
      it("returns the RuleElement instance's `value` property", () => {
        expect(ruleElement.valueOf()).toBe(ruleElement.value)
      })
    })
    describe('[Symbol.toPrimitive]()', () => {
      it('suggests how values should be coerced into types', () => {
        expect(+ruleElement).toBe(NaN)
        expect(`${ruleElement}`).toBe(ruleElement.toString())

        ruleElement = new RuleElement('nonsense', 67)
        expect(+ruleElement).toBe(ruleElement.value)
        expect(+ruleElement).toBe(ruleElement.valueOf())
      })
    })
  })
})

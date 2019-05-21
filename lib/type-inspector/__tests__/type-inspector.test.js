const typeInspector = require('../type-inspector')
const types = require('../helpers/types.json')
const Proposition = require('../../proposition/proposition')
const RuleElement = require('../../rule-element/rule-element')
const RuleSet = require('../../rule-set/rule-set')
const variableFactory = require('../../variable/variable-factory')

describe('typeInspector', () => {
  it('has enumerators for all types', () => {
    Object.keys(types).forEach((type) => {
      /* eslint-disable-next-line security/detect-object-injection */
      expect(typeInspector[type]).toBeDefined()
    })
  })

  describe('isRuleSet', () => {
    it('returns true with passes a RuleSet.prototype', () => {
      const variable = new RuleSet('rule-set')
      expect(typeInspector.isRuleSet(variable)).toBe(true)
    })
  })

  describe('isTypeOf', () => {
    const { RULE_ELEMENT } = typeInspector
    it('validates archetypes.rules object types', () => {
      const element = new RuleElement('element', 'element')
      expect(typeInspector.isTypeOf(element, RULE_ELEMENT)).toBe(true)
    })
    it('validates primitive data-types', () => {
      expect(typeInspector.isTypeOf(RULE_ELEMENT, 'string'))
        .toBe(true)
    })
  })

  describe('isValueTypeOf', () => {
    it('validates archetype.rules types', () => {
      const variable = variableFactory('unique-stuff', new Set())
      expect(typeInspector.isValueTypeOf(variable, 'set')).toBe(true)
    })
    it('validates primitive data-types', () => {
      const { SET_VARIABLE } = typeInspector
      expect(typeInspector.isValueTypeOf(SET_VARIABLE, 'string')).toBe(
        true
      )
    })
  })
  describe('typeOf', () => {
    const { PROPOSITION } = typeInspector
    it('returns an archetypes.rules object\'s type', () => {
      const element = new Proposition('p', true)
      expect(typeInspector.typeOf(element)).toBe(PROPOSITION)
    })
    it('returns primitive data-types', () => {
      expect(typeInspector.typeOf(PROPOSITION)).toBe('string')
    })
  })
  describe('valueTypeOf', () => {
    it('returns the type of a RuleElement.prototype.value', () => {
      const element = new Proposition('q', true)
      expect(typeInspector.valueTypeOf(element)).toBe('boolean')
    })
    it('returns the type of primitive data-types', () => {
      expect(typeInspector.valueTypeOf(true)).toBe('boolean')
    })
  })
})

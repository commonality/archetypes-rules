const RuleElement = require('../rule-element')

describe('RuleElement', () => {
  describe('toJson', () => {
    it('serializes a RuleElement to JSON', () => {
      const element = new RuleElement('rule-element', 'rule-element')
      const json = element.toJson()
      expect(json).toBeDefined()
    })
  })
})

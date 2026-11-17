import SetVariable from '../set-variable.js'

describe('SetVariable', () => {
  describe('represents a variable that', () => {
    it('has a Set primitive as its value', () => {
      const variable = new SetVariable('set-variable-test', new Set())
      expect(variable).toBeInstanceOf(SetVariable)
      expect(variable.type).toBe('archetypes.rules.SetVariable')
      expect(variable.value).toBeInstanceOf(Set)
    })
  })
  describe('when given a value that is not a Set', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new SetVariable('set', '[]')
      }).toThrow()
    })
  })
  describe('valueOf()', () => {
    it('returns the Set value', () => {
      const variable = new SetVariable('set-variable-test')
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.SetVariable')
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a SetVariable with a "null" value', () => {
        const variable = SetVariable.createNullObject('nullSetVariable')
        expect(variable).toBeInstanceOf(SetVariable)
        expect(variable.type).toBe('archetypes.rules.SetVariable')
        expect(variable.value).toBeNull()
      })
    })
  })
})

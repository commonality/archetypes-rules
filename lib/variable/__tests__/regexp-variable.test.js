import RegExpVariable from '../regexp-variable.js'

describe('RegExpVariable', () => {
  describe('represents a variable that', () => {
    it('has a Regular Expression built-in type as its value', () => {
      let variable = new RegExpVariable('regexp-variable-test', /.*/gim)
      expect(variable).toBeInstanceOf(RegExpVariable)
      expect(variable.type).toBe('archetypes.rules.RegExpVariable')
      expect(variable.value).toBeInstanceOf(RegExp)
      variable = new RegExpVariable(
        'regexp-variable-test',
        new RegExp(/.*/, 'gim')
      )
      expect(variable.type).toBe('archetypes.rules.RegExpVariable')
      expect(variable.value).toBeInstanceOf(RegExp)
    })
  })
  describe('when given a value that is not a RegExp', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new RegExpVariable('regexp-test', '[]')
      }).toThrow()
    })
  })
  describe('valueOf()', () => {
    it('returns the RegExp value', () => {
      const variable = new RegExpVariable('regexp-variable-test', /.*/gm)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.RegExpVariable')
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a RegExpVariable with a "null" value', () => {
        const variable = RegExpVariable.createNullObject('nullRegExpVariable')
        expect(variable).toBeInstanceOf(RegExpVariable)
        expect(variable.type).toBe('archetypes.rules.RegExpVariable')
        expect(variable.value).toBeNull()
      })
    })
  })
})

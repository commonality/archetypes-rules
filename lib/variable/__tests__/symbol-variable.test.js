import SymbolVariable from '../symbol-variable.js'

describe('SymbolVariable', () => {
  describe('represents a variable that', () => {
    it('has a Symbol primitive as its value', () => {
      const variable = new SymbolVariable(
        'set-variable-test',
        Symbol('set-variable-test')
      )
      expect(typeof variable.value).toBe('symbol')
      expect(variable).toBeInstanceOf(SymbolVariable)
    })
  })
  describe('valueOf()', () => {
    it('returns the Symbol value', () => {
      const VALUE = Symbol('set-variable-test')
      const variable = new SymbolVariable('symbol-variable-test', VALUE)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.SymbolVariable')
    })
  })
  describe('when given a value that is not a Symbol', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new SymbolVariable('Symbol', '')
      }).toThrow()
    })
  })
})

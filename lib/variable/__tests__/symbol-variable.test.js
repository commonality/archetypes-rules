const SymbolVariable = require('../symbol-variable.js')

describe('SymbolVariable', () => {
  describe('represents a variable that', () => {
    it('has a Symbol primitive as its value', () => {
      const variable = new SymbolVariable(
        'set-variable-test',
        Symbol('set-variable-test')
      )
      expect(typeof variable.value).toBe('symbol')
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

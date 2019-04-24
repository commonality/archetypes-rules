const NumberVariable = require('../number-variable.js')

describe('NumberVariable', () => {
  describe('represents a variable that', () => {
    it('has a Number primitive as its value', () => {
      const VALUE = 42
      const variable = new NumberVariable(
        'number-variable-test',
        VALUE
      )
      expect(typeof variable.value).toBe('number')
    })
  })
  describe('when given a value that is not a Number', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new NumberVariable('number', '42')
      }).toThrow()
    })
  })

  describe('createNullObject', () => {
    it('returns an instance of itself with value === null', () => {
      const name = 'null-number-variable'
      const variable = NumberVariable.createNullObject(name)
      expect(variable).toBeInstanceOf(NumberVariable)
      expect(variable.name).toBe(name)
      expect(variable.value).toBe(null)
    })
  })
})

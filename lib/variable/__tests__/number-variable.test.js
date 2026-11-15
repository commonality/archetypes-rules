import NumberVariable from '../number-variable.js'

describe('NumberVariable', () => {
  describe('represents a variable that', () => {
    it('has a Number primitive as its value', () => {
      const VALUE = 42
      const variable = new NumberVariable('number-variable-test', VALUE)
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
  describe('valueOf()', () => {
    it('returns the Number primitive', () => {
      const VALUE = 1
      const variable = new NumberVariable('number-variable-test', VALUE)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.NumberVariable')
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

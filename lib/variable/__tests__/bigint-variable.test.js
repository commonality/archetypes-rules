import BigIntVariable from '../bigint-variable.js'

describe('BigIntVariable', () => {
  describe('represents a variable that', () => {
    it('has a bigint primitive as its value', () => {
      const VALUE = 9007199254740991n
      const variable = new BigIntVariable('bigint-variable-test', VALUE)
      expect(typeof variable.value).toBe('bigint')
    })
  })
  describe('when given a value that is not a bigint', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new BigIntVariable('bigint', '9007199254740991')
      }).toThrow()
    })
  })
  describe('valueOf()', () => {
    it('returns a bigint primitive', () => {
      const VALUE = 9007199254740991n
      const variable = new BigIntVariable('bigint-variable-test', VALUE)
      expect(variable.valueOf()).toBe(variable.value)
    })
  })
  describe('createNullObject', () => {
    it('returns an instance of itself with value === null', () => {
      const name = 'null-bigint-variable'
      const variable = BigIntVariable.createNullObject(name)
      expect(variable).toBeInstanceOf(BigIntVariable)
      expect(variable.name).toBe(name)
      expect(variable.value).toBe(null)
    })
  })
})

import ErrorVariable from '../error-variable.js'

describe('ErrorVariable', () => {
  describe('represents a variable that', () => {
    it('has an Error object as its value', () => {
      const variable = new ErrorVariable('error-variable-test', new Error())
      expect(variable.value).toBeInstanceOf(Error)
    })
  })
  describe('when given a value that is not an Error', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new ErrorVariable('err', 'err')
      }).toThrow()
    })
  })
  describe('valueOf()', () => {
    it('returns the Error object', () => {
      const VALUE = new RangeError('range-error')
      const variable = new ErrorVariable('range-error-variable-test', VALUE)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.ErrorVariable')
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates an ErrorVariable with a "null" value', () => {
        const variable = ErrorVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(ErrorVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

const StringVariable = require('../string-variable.js')

describe('StringVariable', () => {
  describe('represents a variable that', () => {
    it('has a String primitive as its value', () => {
      const variable = new StringVariable(
        'set-variable-test',
        'value'
      )
      expect(typeof variable.value).toBe('string')
    })
  })
  describe('when given a value that is not a String', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new StringVariable('string', [])
      }).toThrow()
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a StringVariable with a "null" value', () => {
        const variable = StringVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(StringVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

const SetVariable = require('../set-variable.js')

describe('SetVariable', () => {
  describe('represents a variable that', () => {
    it('has a Number primitive as its value', () => {
      const variable = new SetVariable(
        'set-variable-test',
        new Set()
      )
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
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a SetVariable with a "null" value', () => {
        const variable = SetVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(SetVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

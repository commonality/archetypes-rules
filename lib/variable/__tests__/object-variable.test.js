const ObjectVariable = require('../object-variable.js')

describe('@archetypes/rules/ObjectVariable', () => {
  describe('represents a variable that', () => {
    it('has a Number primitive as its value', () => {
      const VALUE = {
      }
      const variable = new ObjectVariable('object-variable-test', VALUE)
      expect(variable.value).toBeInstanceOf(Object)
    })
  })
  describe('when given a value that is not an Object', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new ObjectVariable('json', '{}')
      }).toThrow()
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates an ObjectVariable with a "null" value', () => {
        const variable = ObjectVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(ObjectVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

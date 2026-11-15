import ObjectVariable from '../object-variable.js'

describe('ObjectVariable', () => {
  describe('represents a variable that', () => {
    it('has an Object primitive as its value', () => {
      const VALUE = {}
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
  describe('valueOf()', () => {
    it('returns the Object value', () => {
      const VALUE = {}
      const variable = new ObjectVariable('object-variable-test', VALUE)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.ObjectVariable')
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

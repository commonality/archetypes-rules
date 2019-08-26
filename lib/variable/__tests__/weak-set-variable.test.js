const WeakSetVariable = require('../weak-set-variable.js')

describe('@archetypes/rules/WeakSetVariable', () => {
  describe('represents a variable that', () => {
    it('has a WeakSet as its value', () => {
      const variable = new WeakSetVariable('set-variable-test', new WeakSet())
      expect(variable.value).toBeInstanceOf(WeakSet)
    })
  })
  describe('when given a value that is not a WeakSet', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new WeakSet('set', '[]')
      }).toThrow()
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a WeakSetVariable with a "null" value', () => {
        const variable = WeakSetVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(WeakSetVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

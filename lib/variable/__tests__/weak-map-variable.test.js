import WeakMapVariable from '../weak-map-variable'

describe('WeakMapVariable', () => {
  describe('represents a variable that', () => {
    it('has a WeakMap object as its value', () => {
      const variable = new WeakMapVariable('error-variable-test', new WeakMap())
      expect(variable.value).toBeInstanceOf(WeakMap)
    })
  })
  describe('when given a value that is not a WeakMap', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new WeakMap('map', 'map')
      }).toThrow()
    })
  })
  describe('valueOf()', () => {
    it('returns the WeakMap value', () => {
      const key = { name: 'WeakMapKey' }
      const value = new WeakMap()
      value.set(key, 1)
      const variable = new WeakMapVariable('weak-map-variable-test', value)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.WeakMapVariable')
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a WeakMapVariable with a "null" value', () => {
        const variable = WeakMapVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(WeakMapVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

const MapVariable = require('../map-variable')

describe('@archetypes/rules/MapVariable', () => {
  describe('represents a variable that', () => {
    it('has a Map object as its value', () => {
      const variable = new MapVariable('error-variable-test', new Map())
      expect(variable.value).toBeInstanceOf(Map)
    })
  })
  describe('when given a value that is not a Map', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new MapVariable('map', 'map')
      }).toThrow()
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates an MapVariable with a "null" value', () => {
        const variable = MapVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(MapVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

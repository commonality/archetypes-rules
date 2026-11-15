import PromiseVariable from '../promise-variable.js'

describe('PromiseVariable', () => {
  describe('represents a variable that', () => {
    it('has a Promise primitive as its value', () => {
      const VALUE = new Promise(resolve => {
        resolve('Resolved!')
      })
      const variable = new PromiseVariable('promise-variable-test', VALUE)
      expect(variable.value).toBeInstanceOf(Promise)
    })
  })
  describe('when given a value that is not a Promise', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new PromiseVariable('json', '{}')
      }).toThrow()
    })
  })
  describe('valueOf()', () => {
    it('returns the Promise value', () => {
      const VALUE = new Promise(resolve => {
        resolve(true)
      })
      const variable = new PromiseVariable('promise-variable-test', VALUE)
      expect(variable.valueOf()).toBe(variable.value)
      expect(variable.type).toBe('archetypes.rules.PromiseVariable')
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates an PromiseVariable with a "null" value', () => {
        const variable = PromiseVariable.createNullObject('null-promise')
        expect(variable).toBeInstanceOf(PromiseVariable)
        // expect(variable.value).toBeNull()
      })
    })
  })
})

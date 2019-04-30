/* eslint-disable max-len */
const DateVariable = require('../date-variable.js')

describe('DateVariable', () => {
  describe('represents a variable that', () => {
    it('has a Date as its value', () => {
      const variable = new DateVariable(
        'now',
        new Date()
      )
      expect(variable.value).toBeInstanceOf(Date)
    })
  })

  describe('when a date value is omitted', () => {
    it('defaults to the current date', () => {
      const variable = new DateVariable('default-date')
      expect(variable.value).toBeInstanceOf(Date)
    })
  })

  describe('when given a value that is not a Date', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new DateVariable('invalid', Date.now())
      }).toThrow()
    })
  })
  describe('#after(date: DateVariable)', () => {
    it('determines whether the current occurred subsequently to another date', () => {
      const y2k = new DateVariable('Y2K', new Date(2000, 0, 1))
      const mayanApocalypse = new DateVariable(
        'endOfMayanCosmicEpoch',
        new Date(2012, 11, 12)
      )
      let doomsday = mayanApocalypse.after(y2k)
      expect(doomsday.value).toBe(true)
      doomsday = y2k.after(mayanApocalypse)
      expect(doomsday.value).toBe(false)
    })
  })
  describe('#before(date: DateVariable)', () => {
    it('determines whether the current occurred prior to another date', () => {
      const y2k = new DateVariable('Y2K', new Date(2000, 0, 1))
      const mayanApocalypse = new DateVariable(
        'endOfMayanCosmicEpoch',
        new Date(2012, 11, 12)
      )
      let doomsday = mayanApocalypse.before(y2k)
      expect(doomsday.value).toBe(false)

      doomsday = y2k.before(mayanApocalypse)
      expect(doomsday.value).toBe(true)
    })
  })

  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a DateVariable with a "null" value', () => {
        const variable = DateVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(DateVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

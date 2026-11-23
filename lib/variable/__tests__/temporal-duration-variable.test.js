import TemporalDurationVariable from '../temporal-duration-variable'

describe('archetypes.rules.TemporalDurationVariable', () => {
  it('represents a variable with a valid ISO 8601 duration value', () => {
    const variable = new TemporalDurationVariable('duration', {
      year: 2025,
      month: 10,
      day: 28,
      hour: 1,
      minute: 30,
      second: 30
    })
    expect(variable).toBeDefined()
  })
  describe('has the static method', () => {
    describe('createNullObject(name: String)', () => {
      it('creates a TemporalDurationVariable with a value of `null`', () => {
        const variable = TemporalDurationVariable.createNullObject('duration')
        expect(variable.value).toBe(null)
      })
    })
    describe('isValid(iso8601Duration)', () => {
      it('returns `true` if valid', () => {
        expect(TemporalDurationVariable.isValid('P40D')).toBe(true)
        expect(TemporalDurationVariable.isValid('P1Y1D')).toBe(true)
        expect(TemporalDurationVariable.isValid('P3DT4H59M')).toBe(true)
        expect(TemporalDurationVariable.isValid('PT2H30M')).toBe(true)
        expect(TemporalDurationVariable.isValid('P1M')).toBe(true)
        expect(TemporalDurationVariable.isValid('PT1M')).toBe(true)
        expect(TemporalDurationVariable.isValid('PT0.0021S')).toBe(true)
        expect(TemporalDurationVariable.isValid('PT0S')).toBe(true)
        expect(TemporalDurationVariable.isValid('P0D')).toBe(true)
        expect(TemporalDurationVariable.isValid('P32W')).toBe(true)
      })
      it('returns `false` if invalid', () => {
        expect(TemporalDurationVariable.isValid('2026-11-22')).toBe(false)
      })
    })
  })
})

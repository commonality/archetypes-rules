import TemporalDurationVariable from '../temporal-duration-variable'

describe('archetypes.rules.TemporalDurationVariable', () => {
  it('represents a variable with a valid ISO 8601 duration value', () => {
    expect(TemporalDurationVariable).toBeDefined()
  })
  describe('has a constructor with a `value` parameter that can be', () => {
    it('either a valid ISO 8601 duration string', () => {
      const variable = new TemporalDurationVariable('duration', 'P3DT4H59M')
      expect(variable).toBeDefined()
      expect(variable?.type).toBe('archetypes.rules.TemporalDurationVariable')
    })
    it('or a Temporal.Duration instance', () => {
      const year = 0
      const month = 1
      const duration = new Temporal.Duration(year, month)
      const variable = new TemporalDurationVariable('duration', duration)
      expect(variable).toBeDefined()
      expect(variable?.type).toBe('archetypes.rules.TemporalDurationVariable')
    })
    it('or an object with all constructor parameters', () => {
      const variable = new TemporalDurationVariable('duration', {
        years: 2025,
        months: 10,
        days: 28,
        hours: 1,
        minutes: 30,
        seconds: 30
      })
      expect(variable).toBeDefined()
      expect(variable?.type).toBe('archetypes.rules.TemporalDurationVariable')
      expect(variable.value.toJSON().startsWith('P2025Y10M')).toBe(true)
    })
  })
  describe('provides the instance methods', () => {
    describe('toString([options])', () => {
      it('creates a string representation of the TemporalDurationVariable.prototype.value', () => {
        const variable = new TemporalDurationVariable('duration', 'P3DT4H59M')
        expect(variable.toString()).toBe('P3DT4H59M0.000S')
      })
    })
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

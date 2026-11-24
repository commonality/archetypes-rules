// import { Temporal } from '@js-temporal/polyfill'
import TemporalInstantVariable from '../temporal-instant-variable'

describe('archetypes.rules.TemporalInstantVariable', () => {
  describe('represents a Temporal.Instant', () => {
    describe('with a constructor that accepts the parameter', () => {
      let variable = new TemporalInstantVariable('instant-example')
      it('name: string', () => {
        expect(variable.name).toBe('instant-example')
      })
      it('value: Temporal.Instant | undefined', () => {
        expect(variable.value[Symbol.toStringTag]).toBe('Temporal.Instant')
        variable = new TemporalInstantVariable(
          'instant-example',
          new Date().toTemporalInstant()
        )
        expect(variable.value[Symbol.toStringTag]).toBe('Temporal.Instant')
      })
      describe('with properties', () => {
        const instant = new Date().toTemporalInstant()
        const variable = new TemporalInstantVariable('instant-example', instant)
        it('name: string', () => {
          expect(variable.name).toBe('instant-example')
        })
        it('value: TemporalInstant', () => {
          expect(variable.value[Symbol.toStringTag]).toBe('Temporal.Instant')
        })
        it('type: string', () => {
          expect(variable?.type).toBe(
            'archetypes.rules.TemporalInstantVariable'
          )
        })
      })
      describe('with the static method', () => {
        it('createNullObject(name: string, epochNanoseconds: bigint)', () => {
          const variable =
            TemporalInstantVariable.createNullObject('null-instant')
          expect(variable.name).toBe('null-instant')
          expect(variable.value).toBe(null)
        })
      })
    })
  })
})

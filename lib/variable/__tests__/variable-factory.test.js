const ArrayVariable = require('../array-variable')
const DateVariable = require('../date-variable')
const ErrorVariable = require('../error-variable')
const MapVariable = require('../map-variable')
const NumberVariable = require('../number-variable')
const ObjectVariable = require('../object-variable')
const SetVariable = require('../set-variable')
const StringVariable = require('../string-variable')
const SymbolVariable = require('../symbol-variable')
const variableFactory = require('../variable-factory')
const WeakMapVariable = require('../weak-map-variable')
const WeakSetVariable = require('../weak-set-variable')

describe('variableFactory', () => {
  describe('creates Variables by inferring type, e.g.,', () => {
    describe('when given a known Variable type such as a(n)', () => {
      describe('array,', () => {
        it('creates an ArrayVariable', () => {
          const value = [
            '.agilekeychain',
            '.asc',
            '.bek',
            '.cscfg'
          ]
          expect(variableFactory('v', value)).toBeInstanceOf(ArrayVariable)
        })
      })

      describe('date,', () => {
        it('creates a DateVariable', () => {
          const value = new Date()
          expect(variableFactory('date', value)).toBeInstanceOf(DateVariable)
        })
      })

      describe('error,', () => {
        it('creates an ErrorVariable', () => {
          const value = new Error()
          expect(variableFactory('error', value)).toBeInstanceOf(ErrorVariable)
        })
      })

      describe('map,', () => {
        it('creates a MapVariable', () => {
          const value = new Map()
          expect(variableFactory('map', value)).toBeInstanceOf(MapVariable)
        })
      })
      describe('number,', () => {
        it('creates a NumberVariable', () => {
          let value = Number()
          expect(variableFactory('number', value))
            .toBeInstanceOf(NumberVariable)
          value = 42
          expect(variableFactory('meaningOfLife', value))
            .toBeInstanceOf(NumberVariable)
        })
      })
      describe('object,', () => {
        it('creates an ObjectVariable', () => {
          // eslint-disable-next-line no-new-object
          let value = new Object()
          expect(variableFactory('object', value))
            .toBeInstanceOf(ObjectVariable)
          value = {
          }
          expect(variableFactory('object', value))
            .toBeInstanceOf(ObjectVariable)
        })
      })

      describe('set,', () => {
        it('creates a SetVariable', () => {
          const value = new Set()
          expect(variableFactory('set', value))
            .toBeInstanceOf(SetVariable)
        })
      })
      describe('string,', () => {
        it('creates a StringVariable', () => {
          let value = String()
          expect(variableFactory('string', value))
            .toBeInstanceOf(StringVariable)
          value = 'string'
          expect(variableFactory('string', value))
            .toBeInstanceOf(StringVariable)
        })
      })

      describe('symbol,', () => {
        it('creates a SymbolVariable', () => {
          const value = Symbol('value')
          expect(variableFactory('symbol', value))
            .toBeInstanceOf(SymbolVariable)
        })
      })
      describe('weak-map,', () => {
        it('creates a WeakMapVariable', () => {
          const value = new WeakMap()
          expect(variableFactory('weak-map', value))
            .toBeInstanceOf(WeakMapVariable)
        })
      })
      describe('weak-set,', () => {
        it('creates a WeakSetVariable', () => {
          const value = new WeakSet()
          expect(variableFactory('weak-set', value))
            .toBeInstanceOf(WeakSetVariable)
        })
      })
    })
  })

  describe('when passed a /NULL_[A-Z]+_VARIABLE/ type', () => {
    it('creates a NullObject for that Variable type', () => {
      const variable = variableFactory('null-object-test', 'NULL_SET_VARIABLE')
      expect(variable.value).toBeNull()
      expect(variable).toBeInstanceOf(SetVariable)
    })
  })
})

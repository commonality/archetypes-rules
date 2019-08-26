/* eslint-disable max-lines-per-function,max-statements,no-magic-numbers */
const ArrayVariable = require('../array-variable')
const DateVariable = require('../date-variable')
const ErrorVariable = require('../error-variable')
const MapVariable = require('../map-variable')
const NumberVariable = require('../number-variable')
const ObjectVariable = require('../object-variable')
const SetVariable = require('../set-variable')
const StringVariable = require('../string-variable')
const SymbolVariable = require('../symbol-variable')
const typeInspector = require('../../type-inspector/type-inspector')
const variableFactory = require('../variable-factory')
const WeakMapVariable = require('../weak-map-variable')
const WeakSetVariable = require('../weak-set-variable')

describe('@archetypes/rules/variableFactory', () => {
  describe('creates Variables by inferring type, e.g.,', () => {
    describe('when given a known Variable type such as a(n)', () => {
      describe('array,', () => {
        it('creates an ArrayVariable', () => {
          const value = ['.agilekeychain', '.asc', '.bek', '.cscfg']
          expect(variableFactory('v', value)).toBeInstanceOf(ArrayVariable)
        })
      })

      describe('date,', () => {
        it('creates a DateVariable', () => {
          const value = new Date()
          const variable = variableFactory('date', value)
          expect(variable).toBeInstanceOf(DateVariable)
          expect(variable.type).toBe(typeInspector.DATE_VARIABLE)
        })
      })

      describe('error,', () => {
        it('creates an ErrorVariable', () => {
          const value = new Error()
          const variable = variableFactory('error', value)
          expect(variable).toBeInstanceOf(ErrorVariable)
          expect(variable.type).toBe(typeInspector.ERROR_VARIABLE)
        })
      })

      describe('map,', () => {
        it('creates a MapVariable', () => {
          const value = new Map()
          const variable = variableFactory('map', value)
          expect(variable).toBeInstanceOf(MapVariable)
          expect(variable.type).toBe(typeInspector.MAP_VARIABLE)
        })
      })
      describe('number,', () => {
        it('creates a NumberVariable', () => {
          let value = Number()
          expect(variableFactory('number', value)).toBeInstanceOf(
            NumberVariable
          )
          value = 42
          const variable = variableFactory('meaningOfLife', value)
          expect(variable).toBeInstanceOf(NumberVariable)
          expect(variable.type).toBe(typeInspector.NUMBER_VARIABLE)
        })
      })
      describe('object,', () => {
        it('creates an ObjectVariable', () => {
          // eslint-disable-next-line no-new-object
          let value = new Object()
          expect(variableFactory('object', value)).toBeInstanceOf(
            ObjectVariable
          )
          value = {
          }
          const variable = variableFactory('object', value)
          expect(variable).toBeInstanceOf(ObjectVariable)
          expect(variable.type).toBe(typeInspector.OBJECT_VARIABLE)
        })
      })

      describe('set,', () => {
        it('creates a SetVariable', () => {
          const value = new Set()
          const variable = variableFactory('set', value)
          expect(variable).toBeInstanceOf(SetVariable)
          expect(variable.type).toBe(typeInspector.SET_VARIABLE)
        })
      })
      describe('string,', () => {
        it('creates a StringVariable', () => {
          let value = String()
          expect(variableFactory('string', value)).toBeInstanceOf(
            StringVariable
          )
          value = 'string'
          const variable = variableFactory('string', value)
          expect(variable).toBeInstanceOf(StringVariable)
          expect(variable.type).toBe(typeInspector.STRING_VARIABLE)
        })
      })

      describe('symbol,', () => {
        it('creates a SymbolVariable', () => {
          const value = Symbol('value')
          const variable = variableFactory('symbol', value)
          expect(variable).toBeInstanceOf(SymbolVariable)
          expect(variable.type).toBe(typeInspector.SYMBOL_VARIABLE)
        })
      })
      describe('weak-map,', () => {
        it('creates a WeakMapVariable', () => {
          const value = new WeakMap()
          const variable = variableFactory('weak-map', value)
          expect(variable).toBeInstanceOf(WeakMapVariable)
          expect(variable.type).toBe(typeInspector.WEAK_MAP_VARIABLE)
        })
      })
      describe('weak-set,', () => {
        it('creates a WeakSetVariable', () => {
          const value = new WeakSet()
          const variable = variableFactory('weak-set', value)
          expect(variable).toBeInstanceOf(WeakSetVariable)
          expect(variable.type).toBe(typeInspector.WEAK_SET_VARIABLE)
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

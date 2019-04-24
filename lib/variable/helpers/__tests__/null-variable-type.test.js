const nullVariableType = require('../null-variable-type.js')
const ArrayVariable = require('../../array-variable')
const DateVariable = require('../../date-variable')
const ErrorVariable = require('../../error-variable')
const MapVariable = require('../../map-variable')
const NumberVariable = require('../../number-variable')
const ObjectVariable = require('../../object-variable')
const SetVariable = require('../../set-variable')
const StringVariable = require('../../string-variable')
const WeakMapVariable = require('../../weak-map-variable')
const WeakSetVariable = require('../../weak-set-variable')

describe('nullVariableType', () => {
  describe('is an enumeration of Null Variables', () => {
    describe('NULL_ARRAY_VARIABLE', () => {
      it('creates an ArrayVariable with a null value', () => {
        ArrayVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_ARRAY_VARIABLE')('null')
        expect(ArrayVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_DATE_VARIABLE', () => {
      it('creates a DateVariable with a null value', () => {
        DateVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_DATE_VARIABLE')('null')
        expect(DateVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_ERROR_VARIABLE', () => {
      it('creates an ErrorVariable with a null value', () => {
        ErrorVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_ERROR_VARIABLE')('null')
        expect(ErrorVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_MAP_VARIABLE', () => {
      it('creates a MapVariable with a null value', () => {
        MapVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_MAP_VARIABLE')('null')
        expect(MapVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_NUMBER_VARIABLE', () => {
      it('creates a NumberVariable with a null value', () => {
        NumberVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_NUMBER_VARIABLE')('null')
        expect(NumberVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_OBJECT_VARIABLE', () => {
      it('creates an ObjectVariable with a null value', () => {
        ObjectVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_OBJECT_VARIABLE')('null')
        expect(ObjectVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_SET_VARIABLE', () => {
      it('creates a SetVariable with a null value', () => {
        SetVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_SET_VARIABLE')('null')
        expect(SetVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_STRING_VARIABLE', () => {
      it('creates a StringVariable with a null value', () => {
        StringVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_STRING_VARIABLE')('null')
        expect(StringVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_WEAK_MAP_VARIABLE', () => {
      it('creates a WeakMapVariable with a null value', () => {
        WeakMapVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_WEAK_MAP_VARIABLE')('null')
        expect(WeakMapVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
    describe('NULL_WEAK_SET_VARIABLE', () => {
      it('creates a WeakSetVariable with a null value', () => {
        WeakSetVariable.createNullObject = jest.fn()
        nullVariableType.get('NULL_WEAK_SET_VARIABLE')('null')
        expect(WeakSetVariable.createNullObject).toHaveBeenCalledWith('null')
      })
    })
  })
})

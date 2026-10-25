import { jest } from '@jest/globals'
import ArrayVariable from '../../array-variable'
import DateVariable from '../../date-variable'
import ErrorVariable from '../../error-variable'
import MapVariable from '../../map-variable'
import NumberVariable from '../../number-variable'
import ObjectVariable from '../../object-variable'
import SetVariable from '../../set-variable'
import StringVariable from '../../string-variable'
import WeakMapVariable from '../../weak-map-variable'
import WeakSetVariable from '../../weak-set-variable'
import nullVariableType from '../null-variable-type.js'

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

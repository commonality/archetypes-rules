/* eslint-disable max-len,max-lines,max-lines-per-function,max-statements,no-magic-numbers */
const ArrayVariable = require('../array-variable')
const NumberVariable = require('../number-variable')
const StringVariable = require('../string-variable')
const debug = require('debug')('@archetypes/rules/ArrayVariable.test')

describe('ArrayVariable', () => {
  let variable = null
  let someOtherVariable = null
  beforeEach(() => {
    variable = new ArrayVariable('variable', [
      '.agilekeychain',
      '.asc',
      '.bek',
      '.cscfg',
      '.dayone',
      '.fve',
      '.gnucash',
      '.jks',
      '.keychain',
      '.kwallet',
      '.log',
      '.mdf',
      '.ovpn',
      '.p12',
      '.pcap',
      '.pem',
      '.pfx',
      '.pkcs12',
      '.psafe3',
      '.rdp',
      '.sdf',
      '.sqlite',
      '.tblk',
      '.tpm'
    ])
    someOtherVariable = new ArrayVariable('someOtherVariable', [])
  })
  afterEach(() => {
    variable = null
    someOtherVariable = null
  })

  describe('represents a Variable that', () => {
    it('has an Array as its value', () => {
      expect(variable.value).toBeInstanceOf(Array)
    })
  })

  describe('when assigned a value that is not an Array', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new ArrayVariable(
          'invalid',
          'this is not an array value'
        )
      }).toThrow()
    })
  })

  describe('has quantifier operators', () => {
    describe('deepEqual', () => {
      it('is an alias for the #equalTo method', () => {
        variable.equalTo = jest.fn()
        variable.deepEqual(someOtherVariable)
        expect(variable.equalTo).toHaveBeenCalled()
      })
    })

    describe('endsWith', () => {
      it('tests an array to end with a specific value by identity', () => {
        expect(variable.endsWith(someOtherVariable).value).toBe(false)

        variable = new ArrayVariable('array-variable', [1])
        someOtherVariable = new ArrayVariable('another-array-variable', [
          1
        ])
        expect(variable.endsWith(someOtherVariable).value).toBe(true)
      })
    })

    describe('isEmpty', () => {
      it('returns true for empty ArrayVariables', () => {
        expect(variable.isEmpty().value).toBe(false)
        variable.value.length = 0
        expect(variable.isEmpty().value).toBe(true)
      })
    })

    describe('isNonEmpty', () => {
      it('declares true when an ArrayVariable has one or more values', () => {
        expect(variable.isNonEmpty().value).toBe(true)
        variable.value.length = 0
        expect(variable.isNonEmpty().value).toBe(false)
      })
    })

    describe('isNotEmpty', () => {
      it('is an alias for #nonEmpty', () => {
        variable.nonEmpty = jest.fn()
        variable.isNotEmpty()
        expect(variable.nonEmpty).toHaveBeenCalled()
      })
    })

    describe('equalTo', () => {
      variable = new ArrayVariable('numbers', [
        1,
        2,
        3
      ])
      it('does a deep comparison of all elements by identity', () => {
        const anotherArrayVariable = new ArrayVariable('more-numbers', [
          1,
          2,
          3
        ])
        let result = variable.equalTo(anotherArrayVariable)
        expect(result.value).toBe(false)

        anotherArrayVariable.value = [3, 4, 5]
        result = variable.equalTo(anotherArrayVariable)
        expect(result.value).toBe(false)
      })
    })

    describe('greaterThan', () => {
      it('evaluate whether it is greater than another variable', () => {
        variable = new ArrayVariable('variable', [1, 2, 3])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1])
        expect(variable.greaterThan(someOtherVariable).value).toBe(true)

        someOtherVariable.value = [1, 1, 1, 1, 1]
        expect(variable.greaterThan(someOtherVariable).value).toBe(false)
      })
    })

    describe('greaterThanOrEqualTo', () => {
      it('evaluates whether it greater than or equal to another variable', () => {
        variable = new ArrayVariable('variable', [1, 2, 3])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1, 1, 1])
        expect(variable.greaterThanOrEqualTo(someOtherVariable).value).toBe(true)

        someOtherVariable.value = [1, 1, 1, 1, 1]
        expect(variable.greaterThan(someOtherVariable).value).toBe(false)
      })
    })

    describe('includes', () => {
      it('evaluates wither another Array includes all elements of the current array', () => {
        variable = new ArrayVariable('variable', [1, 2, 3])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1, 1, 1])
        expect(variable.includes(someOtherVariable).value).toBe(true)

        someOtherVariable.value = [1, 1, 1, 1, 1]
        expect(variable.includes(someOtherVariable).value).toBe(true)

        someOtherVariable.value = ['nope']
        expect(variable.includes(someOtherVariable).value).toBe(false)
      })
    })

    describe('includesAny', () => {
      it('evaluates wither another Array includes any elements of the current array', () => {
        variable = new ArrayVariable('variable', [1, 2, 3])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1, 1, 1])
        expect(variable.includesAny(someOtherVariable).value).toBe(true)

        someOtherVariable.value = [4, 5, 6]
        expect(variable.includesAny(someOtherVariable).value).toBe(false)
      })
    })

    describe('length', () => {
      it('compares the length of another array-variable to itself', () => {
        expect(variable.length(someOtherVariable).value).toBe(false)
      })

      it('compares a number to its own length', () => {
        const ELEMENT_COUNT = variable.value.length
        expect(variable.length(ELEMENT_COUNT).value).toBe(true)
      })
    })

    describe('lessThan', () => {
      it('evaluates whether it less than another variable', () => {
        variable = new ArrayVariable('variable', [1, 2])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1, 1, 1])
        expect(variable.lessThan(someOtherVariable).value).toBe(true)
        variable.value.push('three')

        expect(variable.lessThan(someOtherVariable).value).toBe(false)

        someOtherVariable.value = [1, 1, 1, 1, 1]
        expect(variable.lessThan(someOtherVariable).value).toBe(true)
      })
    })

    describe('lessThanOrEqualTo', () => {
      it('evaluates whether it less than or equal to another variable', () => {
        variable = new ArrayVariable('variable', [1, 2, 3])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1, 1, 1])
        expect(variable.lessThanOrEqualTo(someOtherVariable).value).toBe(true)
        variable.value.push('three')

        expect(variable.lessThanOrEqualTo(someOtherVariable).value).toBe(false)

        someOtherVariable.value = [1, 1, 1, 1, 1]
        expect(variable.lessThanOrEqualTo(someOtherVariable).value).toBe(true)
      })
    })

    describe('maxLength', () => {
      let maxLengthVariable = null
      afterEach(() => {
        maxLengthVariable = null
      })

      it('determines whether its array value has a maximum length of another array-variable', () => {
        maxLengthVariable = new ArrayVariable('max-length-array-variable')
        expect(variable.maxLength(maxLengthVariable).value).toBe(false)
        expect(variable.maxLength(variable).value).toBe(true)
      })
      it('determines whether its array value has a maximum length of another number-variable', () => {
        maxLengthVariable = new NumberVariable(
          'max-length-number-variable',
          variable.value.length
        )
        expect(variable.maxLength(maxLengthVariable).value).toBe(true)
      })
      it('determines whether its array value has a maximum length of a number', () => {
        let number = variable.value.length
        expect(variable.maxLength(number).value).toBe(true)

        number += 1
        expect(variable.maxLength(number).value).toBe(true)

        number = 1
        expect(variable.maxLength(number).value).toBe(false)
      })
    })

    describe('minLength', () => {
      let minLengthVariable = null

      afterEach(() => {
        minLengthVariable = null
      })

      it(
        'determines whether its array value has a minimum length as defined by another array-variable', () => {
          minLengthVariable = new ArrayVariable(
            'min-length-array-variable',
            variable.valueOf()
          )
          expect(variable.minLength(minLengthVariable).value).toBe(true)
        }
      )
      it(
        'determines whether its array value has a minimum length as defined by a number-variable', () => {
          minLengthVariable = new NumberVariable(
            'min-length-number-variable',
            variable.valueOf().length
          )
          expect(variable.minLength(minLengthVariable).value).toBe(true)
        }
      )
      it(
        'determines whether its array value has a minimum length as defined by a number', () => {
          minLengthVariable = variable.value.length
          expect(variable.minLength(minLengthVariable).value).toBe(true)

          minLengthVariable += 1
          expect(variable.minLength(minLengthVariable).value).toBe(false)

          minLengthVariable = 0
          expect(variable.minLength(minLengthVariable).value).toBe(true)
        }
      )
    })

    describe('notEqualTo', () => {
      it('evaluates whether it is not equal to another variable *by identity*', () => {
        variable = new ArrayVariable('variable', [2, 3])
        someOtherVariable = new ArrayVariable('someOtherVariable', [1])
        let proposition = variable.notEqualTo(someOtherVariable)
        expect(proposition.value).toBe(true)
        variable.value.push(1)

        proposition = variable.notEqualTo(someOtherVariable)
        expect(proposition.value).toBe(true)

        variable.value = [1, 1, 1, 1, 1]
        someOtherVariable.value = [1, 1, 1, 1, 1]
        proposition = variable.notEqualTo(someOtherVariable)
        expect(proposition.value).toBe(true)

        proposition = variable.notEqualTo(variable)
        expect(proposition.value).toBe(false)
      })
    })

    describe('ofType', () => {
      let ofTypeProposition = null

      afterEach(() => {
        ofTypeProposition = null
      })

      it('tests all elements in its value to match a Variable type', () => {
        const stringVariable = new StringVariable('string-variable')
        ofTypeProposition = variable.ofType(stringVariable)
        debug(`array-variable#ofType(String): ${ofTypeProposition.toString()}`)
        expect(ofTypeProposition.value).toBe(true)
      })

      it('tests all elements in its value to match an ES* data-type', () => {
        ofTypeProposition = variable.ofType('string')
        debug(`array-variable#ofType(String): ${ofTypeProposition.toString()}`)
        expect(ofTypeProposition.value).toBe(true)

        ofTypeProposition = variable.ofType('number')
        debug(`array-variable#ofType(String): ${ofTypeProposition.toString()}`)
        expect(ofTypeProposition.value).toBe(false)
      })
    })
  })

  describe('startsWith', () => {
    describe('tests by identity', () => {
      test('whether another array-variable begins with its own elements', () => {
        expect(variable.startsWith(variable).value).toBe(true)
        expect(variable.startsWith(someOtherVariable).value).toBe(false)
      })
    })
  })

  describe('static', () => {
    describe('createNullObject', () => {
      it('creates an ArrayVariable with a "null" value', () => {
        variable = ArrayVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(ArrayVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

/* eslint-disable max-len */
const ArrayVariable = require('../array-variable.js')

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
    describe('equalTo', () => {
      const variable = new ArrayVariable('numbers', [
        1,
        2,
        3
      ])
      it('does a deep comparison of all elements', () => {
        let anotherArrayVariable = new ArrayVariable('more-numbers', [
          1,
          2,
          3
        ])
        let result = variable.equalTo(anotherArrayVariable)
        expect(result.value).toBe(true)

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
    describe('notEqualTo', () => {
      it('evaluates whether it is not equal to another variable', () => {
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
        expect(proposition.value).toBe(false)
      })
    })
  })

  describe('static', () => {
    describe('createNullObject', () => {
      it('creates an ArrayVariable with a "null" value', () => {
        const variable = ArrayVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(ArrayVariable)
        expect(variable.value).toBeNull()
      })
    })
  })
})

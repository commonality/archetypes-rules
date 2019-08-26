/* eslint-disable max-len,max-lines-per-function */
/* eslint-disable sonarjs/no-duplicate-string */

const ArrayVariable = require('../array-variable')
const NumberVariable = require('../number-variable')
const StringVariable = require('../string-variable.js')

describe('StringVariable', () => {
  describe('represents a variable that', () => {
    it('has a String primitive as its value', () => {
      const variable = new StringVariable('set-variable-test', 'value')
      expect(typeof variable.value).toBe('string')
    })
  })
  describe('when given a value that is not a String', () => {
    it('throws an ArgumentError', () => {
      expect(() => {
        /* eslint-disable-next-line no-new */
        new StringVariable('string', [])
      }).toThrow()
    })
  })
  describe('static', () => {
    describe('createNullObject', () => {
      it('creates a StringVariable with a "null" value', () => {
        const variable = StringVariable.createNullObject('null')
        expect(variable).toBeInstanceOf(StringVariable)
        expect(variable.value).toBeNull()
      })
    })
  })

  describe('operator methods', () => {
    describe('exceedsMaxLength', () => {
      it('determines whether the current value is less than or equal to a specific character count', () => {
        const variable = new StringVariable('has-max-length', 'has-max-length')
        const {length} = variable.value
        const maxCharCount = new NumberVariable('max-char-count', length)
        let proposition = variable.exceedsMaxLength(maxCharCount)
        expect(proposition.value).toBe(true)

        variable.value = 'This string value exceeds the maximum number allowed'
        proposition = variable.exceedsMaxLength(maxCharCount)
        expect(proposition.value).toBe(false)
      })

      describe('when given anything other than a NumberVariable', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.exceedsMaxLength(
              new StringVariable('should-be', 'number-variable')
            )
          }).toThrow()
        })
      })
    })
    describe('lacksMinLength', () => {
      it('determines whether the current value is greater than or equal to a given character count.', () => {
        const variable = new StringVariable('has-min-length', 'has-min-length')

        const minCharCount = new NumberVariable(
          'min-char-count',
          variable.value.length
        )

        let proposition = variable.lacksMinLength(minCharCount)
        expect(proposition.value).toBe(true)

        variable.value = 'too-few'
        proposition = variable.lacksMinLength(minCharCount)
        expect(proposition.value).toBe(false)
      })
      describe('when given anything other than a NumberVariable', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.lacksMinLength(
              new StringVariable('should-be', 'a-number-variable')
            )
          }).toThrow()
        })
      })
    })
    describe('isEmpty', () => {
      it("determines whether this instance's value has zero (0) characters", () => {
        const variable = new StringVariable('empty-string-variable', '')
        expect(variable.isEmpty().value).toBe(true)

        variable.value = null
        expect(variable.isEmpty().value).toBe(false)

        variable.value = ' '
        expect(variable.isEmpty().value).toBe(false)
      })
    })
    describe('isNotEmpty', () => {
      it('determines whether a string has more then zero (0) chars', () => {
        const variable = new StringVariable(
          'non-empty-string-variable',
          'non-empty-string-variable'
        )
        const proposition = variable.isNotEmpty()
        expect(proposition.value).toBe(true)

        variable.value = ' '
        expect(variable.isNotEmpty().value).toBe(true)

        variable.value = null
        expect(variable.isNotEmpty().value).toBe(false)

        variable.value = ''
        expect(variable.isNotEmpty().value).toBe(false)
      })
    })

    describe('isOneOf', () => {
      it('determines whether a string is in an ArrayVariable', () => {
        let string = new StringVariable('is-one-of', 'is-one-of')
        const array = new ArrayVariable('array-variable', [
          'is-one-of',
          'is-another'
        ])
        let proposition = string.isOneOf(array)
        expect(proposition.value).toBe(true)

        string = new StringVariable('is-not-one-of', 'is-not-one-of')
        proposition = string.isOneOf(array)
        expect(proposition.value).toBe(false)
      })
      describe('when given anything other than an ArrayVariable', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.isOneOf(
              new StringVariable('should-be', 'an-array-variable')
            )
          }).toThrow()
        })
      })
    })
    describe('endsWith', () => {
      it('determines whether a string ends with another string', () => {
        const variable = new StringVariable('test-ends-with', 'test-ends-with')
        const characters = new StringVariable('ends-with', 'with')
        expect(variable.endsWith(characters).value).toBe(true)

        characters.value = 'without'
        expect(variable.endsWith(characters).value).toBe(false)
      })
      describe('when given anything other than a StringVariable', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.endsWith(
              new NumberVariable('should-be-string-variable')
            )
          }).toThrow()
        })
      })
    })
    describe('includes', () => {
      it('determines whether a string may be found within another string', () => {
        const sentence = new StringVariable(
          'sentence',
          'The quick brown fox jumps over the lazy dog.'
        )
        const word = new StringVariable('word', 'fox')

        expect(sentence.includes(word).value).toBe(true)

        word.value = 'dolphin'
        expect(sentence.includes(word).value).toBe(false)
      })
      describe('when given anything other than a StringVariable', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.includes(
              new NumberVariable('only-accepts-string-variables')
            )
          }).toThrow()
        })
      })
    })
    describe('matches', () => {
      it('determines whether a string matches a regular expression', () => {
        const sentence = new StringVariable(
          'sentence',
          'The quick brown fox jumps over the lazy dog. It barked.'
        )
        const pattern = new StringVariable('capital-letters', /[A-Z]/gu)

        expect(sentence.matches(pattern).value).toBe(true)

        sentence.value = sentence.value.toLowerCase()
        expect(sentence.matches(pattern).value).toBe(false)
      })

      describe('when given anything other than a StringVariable with a regular expression value', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.matches(
              new StringVariable('should-be', 'regex')
            )
          }).toThrow()
        })
      })
    })
    describe('startsWith', () => {
      it('determines whether a string begins with the characters of another', () => {
        const sentence = new StringVariable(
          'sentence',
          'The quick brown fox jumps over the lazy dog. It barked.'
        )
        const words = new StringVariable(
          'starts-with-the-words',
          'The quick brown fox '
        )

        expect(sentence.startsWith(words).value).toBe(true)

        words.value = [...words.value].reverse().join('')
        expect(sentence.startsWith(words).value).toBe(false)
      })
      describe('when given anything other than a StringVariable', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            const thrower = new StringVariable('thrower')
            thrower.startsWith(new NumberVariable('string-variables-only-please'))
          }).toThrow()
        })
      })
    })
  })
})

/* eslint-disable max-len,max-lines-per-function,max-statements */

const Proposition = require('../proposition')

describe('@archetypes/rules/Proposition', () => {
  describe('represents a statement with a truth value', () => {
    let proposition = null
    beforeEach(() => {
      proposition = new Proposition('allHumansAreMortal', true)
    })
    test('with a "name"', () => {
      expect(proposition.name).toBe('allHumansAreMortal')
    })
    test('with a Boolean "value"', () => {
      expect(proposition.value).toBe(true)
    })
  })

  describe('throws an ArgumentError if the value is not Boolean', () => {
    expect(() => {
      /* eslint-disable-next-line no-new */
      new Proposition('socratesIsHuman', 'true')
    }).toThrow()
  })

  describe('has four boolean methods', () => {
    describe('#and(p: Proposition)', () => {
      it('performs a logical AND on another proposition', () => {
        const propositionOne = new Proposition('allHumansAreMortal', true)
        const propositionTwo = new Proposition('socratesIsHuman', true)
        const result = propositionOne.and(propositionTwo)
        expect(result.value).toBe(true)
        expect(result.name).toBe('(allHumansAreMortal AND socratesIsHuman)')
      })
    })

    describe('"not"', () => {
      it("negates a proposition's value", () => {
        let proposition = new Proposition('passengerHasSilverCard', true)
        let result = proposition.not()
        expect(result.value).toBe(false)
        expect(result.name).toBe('(NOT passengerHasSilverCard)')
        proposition = new Proposition('passengerHasSilverCard', false)
        result = proposition.not()
        expect(result.value).toBe(true)
      })
    })

    describe('#or(p: Proposition)', () => {
      it('performs a logical OR on another proposition', () => {
        const propositionOne = new Proposition('passengerHasSilverCard', true)
        const propositionTwo = new Proposition('passengerHasGoldCard', true)
        let result = propositionOne.or(propositionTwo)
        expect(result.value).toBe(true)
        expect(result.name).toBe(
          '(passengerHasSilverCard OR passengerHasGoldCard)'
        )
        propositionOne.value = false
        result = propositionOne.or(propositionTwo)
        expect(result.value).toBe(true)
      })
    })

    describe('"xor" performs logical exclusive OR operations', () => {
      it('performs logical exclusive OR operations', () => {
        const proposition = new Proposition('allHumansAreMortal', true)
        const fact = new Proposition('gregIsHuman', true)

        proposition.value = false
        fact.value = false
        let result = proposition.xor(fact)
        expect(result.value).toBe(false)

        proposition.value = false
        fact.value = true
        result = proposition.xor(fact)
        expect(result.value).toBe(true)

        proposition.value = true
        fact.value = false
        result = proposition.xor(fact)
        expect(result.value).toBe(true)

        proposition.value = true
        fact.value = true
        result = proposition.xor(fact)
        expect(result.value).toBe(false)
      })
    })
  })

  describe('toString', () => {
    it('serializes a Proposition to a human-readable format', () => {
      const proposition = new Proposition(
        'thatWhichIsOnlyLivingCanOnlyDie',
        true
      )
      expect(proposition.toString()).toContain(
        'Proposition name = thatWhichIsOnlyLivingCanOnlyDie, value = true'
      )
    })
  })

  describe('has the property "type", which', () => {
    it('identifies itself as "@archetypes/rules/Proposition"', () => {
      const proposition = new Proposition('a', true)
      expect(proposition.type).toBe('@archetypes/rules/Proposition')
    })
  })

  describe('static', () => {
    describe('isProposition', () => {
      it('evaluates whether a rule element is type "@archetypes/rules/Proposition"', () => {
        const ruleElement = new Proposition('proposition', false)
        expect(Proposition.isProposition(ruleElement)).toBe(true)
      })
    })
  })
})

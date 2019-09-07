/* eslint-disable max-len,max-lines-per-function */

const RuleOverride = require('../rule-override.js')

describe('@archetypes/rules/RuleOverride', () => {
  describe('overrides a Rule in a RuleSet', () => {
    describe('creates an audit trail', () => {
      let override = null
      beforeEach(() => {
        override = new RuleOverride('rule', true)
      })
      afterEach(() => {
        override = null
      })

      describe('ruleName: string', () => {
        it('declares the name of the Rule to be overridden', () => {
          expect(override.ruleName).toBe('rule')
        })
      })

      describe('override: boolean', () => {
        it('declares whether to override the Rule in a RuleSet', () => {
          expect(override.override).toBe(true)
        })
      })

      describe('authorizedBy', () => {
        it('is an array of the PartySignatures of People who have authorized the override', () => {
          expect(override.authorizedBy).toBeInstanceOf(Array)
        })
      })

      describe('raisedBy', () => {
        it('is the PartySignature of the Person who raised the override', () => {
          expect(override.raisedBy).toBeDefined()
        })
      })

      describe('why', () => {
        it('describes the reason for the RuleOverride', () => {
          expect(override.why).toBeDefined()
        })
      })

      describe('when', () => {
        it('records the date and time of the override', () => {
          expect(override.when).toBeInstanceOf(Date)
        })
      })
      describe('toString()', () => {
        it('reduces all property names and values to a single string', () => {
          let reason = override.toString()
          expect(typeof reason).toBe('string')

          const authorizer = 'your-boss-identifier'
          override.authorizedBy.push(authorizer)
          reason = override.toString()
          expect(reason).toContain(authorizer)
        })
      })
    })
  })
})

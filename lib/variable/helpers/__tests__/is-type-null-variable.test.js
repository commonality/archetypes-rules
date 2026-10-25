/* eslint-disable max-len */

import RuleElement from '../../../rule-element/rule-element'
import isTypeNullVariable from '../is-type-null-variable.js'

describe('isTypeNullVariable', () => {
  it('determines whether a string value should be treated as a NullVariableObject', () => {
    let value = 'NullNumberVariable'
    expect(isTypeNullVariable(value)).toBe(true)

    value = 'null-weak-set-variable'
    expect(isTypeNullVariable(value)).toBe(true)

    value = 'null'
    expect(isTypeNullVariable(value)).toBe(false)

    value = 'variable'
    expect(isTypeNullVariable(value)).toBe(false)

    expect(isTypeNullVariable(RuleElement)).toBe(false)
  })
})

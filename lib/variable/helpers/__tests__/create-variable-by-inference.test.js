import createVariableByInference from '../create-variable-by-inference'

describe('createVariableByInference', () => {
  it('returns null if the object type cannot be determined', () => {
    const variable = createVariableByInference('Undefined', undefined)
    expect(variable).toBe(null)
  })
})


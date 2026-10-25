import loadByType from '../load-by-type'

describe('loadByType', () => {
  it('returns null if the type cannot be determined', () => {
    const object = loadByType({})
    expect(object).toBe(null)
  })
})

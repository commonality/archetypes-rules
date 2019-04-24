const ruleLoaderType = require('../rule-loader-type.js')

describe('ruleLoaderType', () => {
  it('provides enumerations for valid Rule loading strategies', () => {
    expect(ruleLoaderType.FILE).toBeDefined()
    expect(ruleLoaderType.JSON).toBeDefined()
    expect(ruleLoaderType.OBJECT).toBeDefined()
  })
})

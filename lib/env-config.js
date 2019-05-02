require('debug')('dls:envConfig')
const dotenvExtended = require('dotenv-extended')
const set = require('lodash.set')
const topairs = require('lodash.topairs')

/**
 * @description
 * Load environment variables. This should be the first
 * import/require of the application, as well as any modules
 * that depend on ENV variables.
 *
 * @typedef {object} envConfig
 * @public
 * @see https://git.io/fhV1h
 */

const dotenvExtendedODefaults = {
  assignToProcessEnv: false,
  defaults: '.env.defaults',
  errorOnMissing: false,
  includeProcessEnv: true,
  overrideProcessEnv: false,
  path: '.env',
  schema: '.env.schema'
}

const initEnvDefaults = (options = dotenvExtendedODefaults) => ({
  parsed: Object.assign(dotenvExtended.load(options))
})

const sortEnvVars = (envDefaults) => {
  const dotenvVars = {
    parsed: {

    }
  }
  const keyValuePairs = topairs(envDefaults.parsed).sort()
  const envVarMap = new Map(keyValuePairs)
  envVarMap.forEach((val, key) => {
    set(dotenvVars.parsed, key, val)
  })
  return dotenvVars
}

const createEnvConfig = () => {
  const dotenvVars = sortEnvVars(initEnvDefaults())
  return dotenvVars.parsed
}

const envConfig = createEnvConfig()

module.exports = envConfig

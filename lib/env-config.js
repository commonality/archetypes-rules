const debug = require('debug')('archetypes:rules:env-config')
const dotenvExtended = require('dotenv-extended')
const set = require('lodash.set')
const toPairs = require('lodash.topairs')

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

const dotenvExtendedDefaults = {
  assignToProcessEnv: true,
  defaults: '.env.defaults',
  errorOnMissing: true,
  includeProcessEnv: true,
  overrideProcessEnv: false,
  path: '.env',
  schema: '.env.schema'
}

const initEnvDefaults = (options = dotenvExtendedDefaults) => ({
  parsed: Object.assign(dotenvExtended.load(options))
})

const sortEnvVars = (envDefaults) => {
  const dotenvVars = {
    parsed: {

    }
  }
  const keyValuePairs = toPairs(envDefaults.parsed).sort()
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

debug(envConfig)

module.exports = envConfig

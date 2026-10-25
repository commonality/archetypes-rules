import debug from "debug"
import dotenvExtended from "dotenv-extended"
import set from "lodash.set"
import toPairs from "lodash.topairs"

/**
 * @description
 * Load environment variables. This should be the first import/require of the
 * application, as well as any modules that depend on ENV variables.
 *
 * @typedef {object} envConfig
 * @public
 * @see https://git.io/fhV1h
 */

const dotenvExtendedDefaults = {
	assignToProcessEnv: true,
	defaults: ".env.defaults",
	errorOnMissing: true,
	includeProcessEnv: true,
	overrideProcessEnv: false,
	path: ".env",
	schema: ".env.schema",
}

const initEnvDefaults = (options = dotenvExtendedDefaults) => ({
	parsed: Object.assign(dotenvExtended.load(options)),
})

const sortEnvVars = (envDefaults) => {
	const dotenvVars = {
		parsed: {},
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

export default envConfig

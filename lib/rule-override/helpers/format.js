import is from "@sindresorhus/is"

import kebabCase from "lodash.kebabcase"

const UNKNOWN = "no-entry/unknown"

const format = {
	key(name) {
		return kebabCase(name)
	},

	value(val) {
		let formatedVal = UNKNOWN
		if (Array.isArray(val) && is.nonEmptyArray(val)) {
			formatedVal = val.join(", ")
		} else if (is.date(val)) {
			formatedVal = val.toISOString()
		}
		return formatedVal
	},
}

export default format

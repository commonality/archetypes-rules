import is from "@sindresorhus/is"
import hasIn from "lodash.hasin"

const valueTypeOf = (value) => {
	if (hasIn(value, "value")) {
		return is(value.value)
	}
	return is(value)
}

export default valueTypeOf

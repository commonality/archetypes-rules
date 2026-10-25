import is from "@sindresorhus/is"
import get from "lodash.get"

const getName = (item) => {
	let name = item
	if (is.object(item)) {
		name = get(item, "name")
	}
	return name
}

export default getName

import ow from "ow"
import Variable from "./variable"

class MapVariable extends Variable {
	constructor(name, value = new Map()) {
		super(name, value, ow.map)
	}

	static createNullObject(name) {
		const variable = new MapVariable(name)
		variable.value = null
		return variable
	}
}

export default MapVariable

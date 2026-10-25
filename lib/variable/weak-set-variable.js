import ow from "ow"
import Variable from "./variable"

class WeakSetVariable extends Variable {
	constructor(name, value = new WeakSet()) {
		super(name, value, ow.weakSet)
	}

	static createNullObject(name) {
		const variable = new WeakSetVariable(name)
		variable.value = null
		return variable
	}
}

export default WeakSetVariable

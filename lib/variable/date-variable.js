import ow from "ow"
import Variable from "./variable"

class DateVariable extends Variable {
	constructor(name, value = new Date()) {
		super(name, value, ow.any(ow.date, ow.string))
	}

	after(dateVariable) {
		return this.gt(dateVariable)
	}

	before(dateVariable) {
		return this.lt(dateVariable)
	}

	static createNullObject(name) {
		const variable = new DateVariable(name)
		variable.value = null
		return variable
	}
}

export default DateVariable

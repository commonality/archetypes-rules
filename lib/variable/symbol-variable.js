import ow from "ow"
import Variable from "./variable"

class SymbolVariable extends Variable {
	constructor(name, value) {
		super(name, value, ow.symbol)
	}
}

export default SymbolVariable

import set from "lodash.set"
import Operator from "./operator"
import validOperators from "./valid-operators.json" with { type: 'json' }

const operatorType = new Map()

validOperators.forEach((name) => {
	operatorType.set(name, new Operator(name))
	set(operatorType, name, name)
})

export default  operatorType

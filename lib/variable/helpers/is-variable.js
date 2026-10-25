import is from "@sindresorhus/is"

const isVariable = (ruleElement) => {
	if (is.object(ruleElement) && Object.hasOwn(ruleElement, "type")) {
		const VALID_VARIABLE_TYPE = 0
		return (
			ruleElement.type.search(/archetypes\.rules\.\w+Variable/) ===
			VALID_VARIABLE_TYPE
		)
	}
	return false
}

export default isVariable

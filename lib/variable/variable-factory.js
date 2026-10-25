/* eslint-disable max-len */

import is from "@sindresorhus/is";
import createVariableByInference from "./helpers/create-variable-by-inference";

import getNullVariableOrReference from "./helpers/get-null-variable-or-reference";

const variableFactory = (name, value) => {
	const variable = getNullVariableOrReference(name, value);
	if (is.nullOrUndefined(variable)) {
		return createVariableByInference(name, value);
	}
	return variable;
};

export default variableFactory;

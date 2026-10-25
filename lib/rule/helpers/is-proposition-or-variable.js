import is from "@sindresorhus/is"

import Proposition from "../../proposition/proposition"
import Variable from "../../variable/variable"

const isPropositionOrVariable = (ruleElement) => {
	return (
		!is.nullOrUndefined(ruleElement) &&
		(Proposition.isProposition(ruleElement) || Variable.isVariable(ruleElement))
	)
}

export default isPropositionOrVariable

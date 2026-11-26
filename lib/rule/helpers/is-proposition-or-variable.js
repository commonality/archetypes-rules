import { isNotNil } from 'es-toolkit/predicate'

import Proposition from '../../proposition/proposition'
import Variable from '../../variable/variable'

const isPropositionOrVariable = ruleElement => {
  return (
    isNotNil(ruleElement) &&
    (Proposition.isProposition(ruleElement) || Variable.isVariable(ruleElement))
  )
}

export default isPropositionOrVariable

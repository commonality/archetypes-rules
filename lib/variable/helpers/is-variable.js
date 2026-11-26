import { isObject } from 'es-toolkit/compat'

const isVariable = ruleElement => {
  if (isObject(ruleElement) && Object.hasOwn(ruleElement, 'type')) {
    const VALID_VARIABLE_TYPE = 0
    return (
      ruleElement.type.search(/archetypes\.rules\.\w+Variable/) ===
      VALID_VARIABLE_TYPE
    )
  }
  return false
}

export default isVariable

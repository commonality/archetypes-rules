import { isString } from 'es-toolkit/predicate'

const getTypePredicate = (type, enumerator) => isString(enumerator[type])

export default getTypePredicate

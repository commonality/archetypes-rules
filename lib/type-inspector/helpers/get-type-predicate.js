import is from '@sindresorhus/is'
import get from 'lodash.get'

const getTypePredicate = (type, enumerator) => is.string(get(enumerator, type))

export default getTypePredicate

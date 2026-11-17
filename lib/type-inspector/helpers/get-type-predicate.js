import is from '@sindresorhus/is'

const getTypePredicate = (type, enumerator) => is.string(enumerator[type])

export default getTypePredicate

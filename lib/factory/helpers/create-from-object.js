import loadByType from './load-by-type'

const createFromObject = literal => {
  return loadByType(literal)
}

export default createFromObject

const loadByType = require('./load-by-type')

const createFromObject = (literal) => {
  return loadByType(literal)
}

module.exports = createFromObject

import camelCase from 'camelcase'

const upperFirst = word => {
  const FIRST_LETTER = 0
  const SECOND_LETTER = 1
  const letter = word.at(FIRST_LETTER).toUpperCase()
  return `${letter}${word.slice(SECOND_LETTER)}`
}

const createMethodNameFrom = type => `is${upperFirst(camelCase(type))}`

export default createMethodNameFrom

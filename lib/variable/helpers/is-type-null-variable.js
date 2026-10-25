import is from '@sindresorhus/is'

const isTypeNullVariable = value => {
  if (is.string(value)) {
    const val = value.toLowerCase()
    return val.startsWith('null') && val.endsWith('variable')
  }
  return false
}

export default isTypeNullVariable

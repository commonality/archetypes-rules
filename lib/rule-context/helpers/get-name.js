import is from '@sindresorhus/is'

const getName = item => {
  let name = item
  if (is.object(item)) {
    name = item[name]
  }
  return name
}

export default getName

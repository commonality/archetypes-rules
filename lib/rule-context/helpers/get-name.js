import { isObject } from 'es-toolkit/compat'

const getName = item => {
  let name = item
  if (isObject(item)) {
    name = item.name
  }
  return name
}

export default getName

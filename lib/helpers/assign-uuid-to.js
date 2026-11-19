import { randomUUID } from 'node:crypto'
import ow from 'ow'

const assignUuidTo = (instance, propertyName = 'id') => {
  ow(propertyName, ow.any(ow.string))
  Object.defineProperty(instance, propertyName, {
    configurable: false,
    enumerable: true,
    readable: true,
    value: `${randomUUID()}`,
    writable: false
  })
}

export default assignUuidTo

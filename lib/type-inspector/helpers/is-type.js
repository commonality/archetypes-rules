import { hasIn } from 'es-toolkit/compat'
import types from './types.json' with { type: 'json' }

const isType = (object, type) =>
  hasIn(object, 'type') && object.type === types[type]

export default isType

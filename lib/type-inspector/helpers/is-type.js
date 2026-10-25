import get from 'lodash.get'
import hasIn from 'lodash.hasin'
import types from './types.json' with { type: 'json' }

const isType = (object, type) =>
  hasIn(object, 'type') && object.type === get(types, type)

export default isType

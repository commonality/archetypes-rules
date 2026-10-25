import camelCase from 'lodash.camelcase'
import upperFirst from 'lodash.upperfirst'

const createMethodNameFrom = type => `is${upperFirst(camelCase(type))}`

export default createMethodNameFrom

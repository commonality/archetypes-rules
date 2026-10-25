import ow from 'ow'

const validateType = (variable, constructor) => {
  ow(variable, ow.object.instanceOf(constructor))
}

export default validateType

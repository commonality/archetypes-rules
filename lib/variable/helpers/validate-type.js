import ow from 'ow'

const validateType = (variable, classReference) => {
  ow(variable, ow.object.instanceOf(classReference))
}

export default validateType

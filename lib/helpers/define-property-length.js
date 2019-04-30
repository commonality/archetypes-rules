const definePropertyLength = (object) => {
  Object.defineProperty(object, 'length', {
    get () {
      return Object.keys(object).length
    }
  })
}

module.exports = definePropertyLength

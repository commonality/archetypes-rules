const definePropertyLength = (instance) => {
  Object.defineProperty(instance, 'length', {
    get () {
      return Object.keys(instance).length
    }
  })
}

module.exports = definePropertyLength

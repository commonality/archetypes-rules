const assignTypeTo = (instance, namespace = 'archetypes.rules') => {
  Object.defineProperty(instance, 'type', {
    configurable: false,
    enumerable: true,
    readable: true,
    value: `${namespace}.${instance.constructor.name}`,
    writable: false
  })
}

module.exports = assignTypeTo

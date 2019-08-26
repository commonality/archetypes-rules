/**
 * Assign a `type` property to object created with a constructor
 * function.
 *
 * @param {object} instance - The object on which to define the `type`
 * property.
 * @param {Array<string>} [namespaces=['@archetypes', 'rules']] -
 * Declarative string elements used to provide object scope and organize code
 * into logical, hierarchical groups to avoid identifier name collisions.
 * @param {string} [separator='/'] - Specifies the string which denotes
 * namespace subgroups.
 *
 * @returns void
 */

const assignTypeTo = (
  instance,
  namespaces = ['@archetypes', 'rules'],
  separator = '/'
) => {
  const value = [...namespaces, instance.constructor.name].join(separator)

  Object.defineProperty(instance, 'type', {
    configurable: false,
    enumerable: true,
    readable: true,
    value,
    writable: false
  })
}

module.exports = assignTypeTo

import ow from 'ow'
import Variable from './variable'

/**
 * The
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise}
 * object represents the eventual completion (or failure) of an asynchronous
 * operation and its resulting value.
 *
 * @memberof archetypes.rules
 * @extends {archetypes.rules.Variable}
 * @property {String} name - The PromiseVariable's identifier.
 * @property {Promise<unknown>} value - A
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise}
 * instance.
 * @property {String} type - "archetypes.rules.PromiseVariable" @readonly
 */
class PromiseVariable extends Variable {
  /**
   * Create a new PromiseVariable.
   * @param {String} name - The PromiseVariable's identifier.
   * @param {Promise} value - A
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise}
   * instance.
   */
  constructor(name, value) {
    super(name, value, ow.promise)
  }

  /**
   * Return a Promise instance.
   * @instance
   * @return {Promise.<unknown>} value - A Promise instance.
   */
  valueOf() {
    return this.value
  }

  static createNullObject(name) {
    const value = new Promise((resolve, reject) => {
      resolve(null)
      reject(new Error())
    })
    const variable = new PromiseVariable(name, value)
    return variable
  }
}

export default PromiseVariable

import Operator from '../operator/operator'
import Proposition from '../proposition/proposition'
import variableFactory from '../variable/variable-factory'
import assignTypeTo from './helpers/assign-type-to'
import createFromFile from './helpers/create-from-file'
import createFromObject from './helpers/create-from-object'

/**
 * A convenience object with factory methods for
 *
 * - Rules
 * - RuleContexts
 * - RuleOverrides
 * - RuleSets
 * - RuleElements (Operators, Propositions, and Variables)
 *
 * @property {string} type - A namespaced object type.
 *
 * @category factory
 */

const factory = {
  /**
   * Creates an Rule, RuleContext, RuleOverride, or RuleSet
   * when given a file-system path to a valid and well-formed
   * serialization in JSON format.
   *
   * @memberof factory
   * @async
   * @function createFromFile
   * @param {String} filePath - The path to a JSON file.
   * @param {Object} [options=defaultFileOptions] - JSON file
   * parsing options.
   * @param {Object} [options.reviver=null] - An optional
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse|JSON.reviver}.
   * @param {boolean} [options.throws=true] - Whether to throw an error if
   * the JSON is invalid.
   * @return {Promise<Rule|RuleContext|RuleElement|RuleSet|RuleOverride>} -
   * A prototypal instance from the serialized JSON.
   */

  createFromFile,

  /**
   * Creates an Rule, RuleContext, RuleOverride, or RuleSet
   * when given a valid object-literal.
   *
   * @memberof factory
   * @param {Object} literal - A plain-old JavaScript object.
   * @returns {Rule|RuleContext|RuleElement|RuleSet|RuleOverride} - A
   * A prototypal instance from the serialized JSON.
   */

  createFromObject,

  /**
   * Create an Operator from a valid Operator name.
   *
   * @memberof factory
   * @param {string} name - The name of the Operator.
   * @return {Operator} - An Operator instance.
   */

  createOperator(name) {
    return Operator.factory(name)
  },

  /**
   * Create a Proposition.
   *
   * @memberof factory
   * @param {string} name - A statement/assertion.
   * @param {boolean} [value=false] - The statement's truth-value.
   */

  createProposition(name, value = false) {
    return Proposition.factory(name, value)
  },

  /**
   * Creates a Variable sub-type.
   *
   * @memberof factory
   * @param {string} name - The Variable's name.
   * @param {*} value - A known JavaScript type.
   * @return {*} - A Variable sub-type.
   */

  createVariable(name, value) {
    return variableFactory(name, value)
  }
}

/**
 * @private
 * @ignore
 */

assignTypeTo(factory)

export default factory

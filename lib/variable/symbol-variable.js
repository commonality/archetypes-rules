// const Proposition = require('../proposition/proposition')

const Variable = require('./variable')

// const createRuleElementName = require('../helpers/create-rule-element-name')

const ow = require('ow')

class SymbolVariable extends Variable {
  constructor (name, value) {
    super(name, value, ow.symbol)
  }

  /**
   * @override
   * @description
   * Symbols are (almost) always unique, so default to false.
   *
   * @param {SymbolVariable} symbolVariable - Another SymbolVariable.
   * @returns {Proposition} - Always false.
   * @memberof SymbolVariable
   *

  equalTo (symbolVariable) {
    return new Proposition(
      createRuleElementName(this, symbolVariable, '==='),
      false
    )
  }
  */
}

module.exports = SymbolVariable

const Variable = require('./variable')
const ow = require('ow')

class SymbolVariable extends Variable {
  constructor (name, value) {
    super(name, value, ow.symbol)
  }
}

module.exports = SymbolVariable

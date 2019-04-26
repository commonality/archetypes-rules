const assignTypeTo = require('./helpers/assign-type-to')
const defaultFileOptions = require('./config/default-file-options')

const { readJSON } = require('fs-extra')

const loadByType = require('./helpers/load-by-type')

const load = {

  async fromFile (filePath, options = defaultFileOptions) {
    try {
      const literal = await readJSON(filePath, options)
      return loadByType(literal)
    } catch (err) {
      console.error(err)
    }
  },

  fromObject (literal) {
    return loadByType(literal)
  }
}

assignTypeTo(load)

module.exports = load

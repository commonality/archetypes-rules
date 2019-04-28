const defaultFileOptions = require('./config/default-file-options')

const { readJSON } = require('fs-extra')

const loadByType = require('./helpers/load-by-type')

const create = {

  async fromFile (filePath, options = defaultFileOptions) {
    try {
      const literal = await readJSON(filePath, options)
      return create.fromObject(literal)
    } catch (err) {
      return err
    }
  },

  fromObject (literal) {
    return loadByType(literal)
  }
}

module.exports = create

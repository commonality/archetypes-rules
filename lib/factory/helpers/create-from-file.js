const createFromObject = require('./create-from-object')
const { readJSON } = require('fs-extra')
const defaultFileOptions = require('../config/default-file-options')

const createFromFile = async (filePath, options = defaultFileOptions) => {
  try {
    const literal = await readJSON(filePath, options)
    return createFromObject(literal)
  } catch (err) {
    return err
  }
}

module.exports = createFromFile

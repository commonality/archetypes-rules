import { readFile } from 'node:fs/promises'
import createFromObject from './create-from-object'

const defaultReadFileOptions = {
  encoding: 'utf8',
  flag: 'r',
  signal: undefined,
  buffer: undefined
}

const createFromFile = async (filePath, options = defaultReadFileOptions) => {
  const opts = Object.assign({}, { ...defaultReadFileOptions }, options)
  const literal = await readFile(filePath, opts).then(JSON.parse)
  return createFromObject(literal)
}

export default createFromFile

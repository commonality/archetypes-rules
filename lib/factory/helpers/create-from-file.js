import { readFile } from 'node:fs/promises'
import createFromObject from './create-from-object'

const createFromFile = async (
  filePath,
  options = {
    encoding: 'utf8',
    flag: 'r',
    signal: undefined,
    buffer: undefined
  }
) => {
  const literal = await readFile(filePath, options).then(JSON.parse)
  return createFromObject(literal)
}

export default createFromFile

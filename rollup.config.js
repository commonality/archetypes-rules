/* eslint-disable node/no-unpublished-require */
require('./lib/env-config')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const pkg = require('./package.json')
const recursiveReaddir = require('recursive-readdir')
const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

const dependencies = Object.keys(pkg.dependencies)

const devDependencies = Object.keys(pkg.devDependencies).map(
  (dev) => `node_modules/${dev}/**`
)

const includeFilesThatAreNotTests = (async () => {
  let files = null
  try {
    files = await recursiveReaddir('./lib').filter(
      (filePath) => !filePath.includes('__tests__')
    )
  } catch (err) {
    files = []
  }
  return files
})()

const rollupConfig = {
  input: 'lib/index.js',
  output: [
    {
      compact: true,
      file: pkg.main,
      format: 'cjs',
      interop: false
    }
  ],
  plugins: [
    json({
      compact: true,
      exclude: devDependencies,
      indent: '  ',
      preferConst: true
    }),
    resolve({
      mainFields: ['module', 'main'],
      only: includeFilesThatAreNotTests
    }),
    commonjs({
      exclude: devDependencies
    }),
    terser()
  ],
  external: dependencies
}

module.exports = rollupConfig

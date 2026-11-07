import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
	input: 'lib/index.js',
	output: [{
		file: 'dist/archetypes-rules.mjs',
		format: 'esm'
	}, {
    file: 'dist/archetypes-rules.min.mjs',
    format: 'esm',
    plugins: [
      terser()
    ]
  }, {
    file: 'dist/archetypes-rules.js',
    format: 'cjs'
  }],
  plugins: [
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto'
    }),
    json(),
    nodeResolve()
  ],
  treeshake: {
    moduleSideEffects: false,
    preset: 'smallest'
  }
}

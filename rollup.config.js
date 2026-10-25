/* eslint-disable node/no-unpublished-require */
import "./lib/env-config";

import recursiveReaddir from "recursive-readdir";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json" with { type: "json" };

const dependencies = Object.keys(pkg.dependencies);

const devDependencies = Object.keys(pkg.devDependencies).map(
	(dev) => `node_modules/${dev}/**`,
);

const includeFilesThatAreNotTests = (async () => {
	let files = null;
	try {
		files = await recursiveReaddir("./lib").filter(
			(filePath) => !filePath.includes("__tests__"),
		);
	} catch (err) {
		files = [];
	}
	return files;
})();

const rollupConfig = {
	input: "lib/index.js",
	output: [
		{
			compact: true,
			file: pkg.main,
			format: "cjs",
			interop: false,
		},
	],
	plugins: [
		json({
			compact: true,
			exclude: devDependencies,
			indent: "  ",
			preferConst: true,
		}),
		resolve({
			mainFields: ["module", "main"],
			only: includeFilesThatAreNotTests,
		}),
		commonjs({
			exclude: devDependencies,
		}),
		terser(),
	],
	external: dependencies,
};

export default rollupConfig;

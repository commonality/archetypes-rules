import { readJSON } from "fs-extra";
import defaultFileOptions from "../config/default-file-options";
import createFromObject from "./create-from-object";

const createFromFile = async (filePath, options = defaultFileOptions) => {
	const literal = await readJSON(filePath, options);
	return createFromObject(literal);
};

export default createFromFile;

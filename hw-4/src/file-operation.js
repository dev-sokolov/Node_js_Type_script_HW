import * as fs from "node:fs/promises";
import "dotenv/config";

import path from "node:path";

const userData = process.env.FILENAME;

const pathToFile = path.resolve("src", userData)

await fs.writeFile(pathToFile, "Some text.........")

const text = await fs.readFile(pathToFile, "utf-8")
console.log(text);



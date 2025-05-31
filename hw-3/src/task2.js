import * as fs from 'node:fs/promises';

import path from 'node:path';

const filePath = path.resolve("src", "info.txt");

const textData = "Node.js is awesome!"

export const createAndWtiteFile = async (path, text) => {
    try {
        await fs.writeFile(path, text)
        console.log("file is created and written");

        const fileData = await fs.readFile(path, "utf-8");
        return fileData;
    } catch (error) {
        error.message = "Something went wrong"
        throw error;
    }
}

console.log(await createAndWtiteFile(filePath, textData));






















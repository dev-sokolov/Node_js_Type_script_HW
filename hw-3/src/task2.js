import * as fs from 'node:fs/promises';

import path from 'node:path';

const filePath = path.resolve("src", "info.txt");

const textData = "Node.js is awesome!"

export const createAndWtiteFile = async (filePath, text) => {
    try {
        await fs.writeFile(filePath, text)
        console.log("file is created and written");

        const fileData = await fs.readFile(filePath, "utf-8");
        console.log(fileData);
        return true;
    } catch (error) {
        console.log(error.message);
        return false
    }
}

createAndWtiteFile(filePath, textData)


















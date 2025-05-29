import * as fs from 'node:fs/promises';

import path from 'node:path';

const filePath = path.resolve("src", "info.txt");

try {
    await fs.writeFile(filePath, "Node.js is awesome!")
    console.log("file created and written");

    const fileData = await fs.readFile(filePath, "utf-8");
    console.log(fileData);

} catch (error) {
    console.log(error.message);
}








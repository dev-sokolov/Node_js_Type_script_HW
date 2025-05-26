import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.resolve("src", "simpleLogger", "log.txt");

const logMessage = async (text) => {
    await fs.appendFile(filePath,` \n ${text}`);
}

export default logMessage;
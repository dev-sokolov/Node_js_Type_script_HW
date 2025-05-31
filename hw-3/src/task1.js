import * as fs from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.resolve("src", "myFolder")

const createFolder = async (folderPath) => {
    try {
        await fs.mkdir(folderPath)
        console.log("folder successfully created");
        return true;
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.log("folder already exists");
        } else {
            console.log(error.message);
        }
        return false;
    }
}

setTimeout(async () => {
    try {
        await fs.access(folderPath)
        console.log("folder exist");

        await fs.rmdir(folderPath)
        console.log("folder successfully removed");
    } catch (error) {
        console.log(error.message);
    }
}, 5000)

createFolder(folderPath);
export default createFolder;











import * as fs from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.resolve("src", "myFolder")

try {
    await fs.mkdir(folderPath)
    console.log("folder successfully created");
} catch (error) {
    console.log(error.message);
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










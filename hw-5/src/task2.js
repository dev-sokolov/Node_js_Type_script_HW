import express from 'express';
import * as fs from 'node:fs/promises';
import path from 'node:path';

const app = express();

const pathToErrorLog = path.resolve("src", "errors.log");

app.use((req, res, next) => {
    try {
        throw new Error('Тестовая ошибка');
    } catch (error) {
        fs.appendFile(pathToErrorLog, `${error} \n`);
        res.status(500).setHeader("Content-Type", "text/plain").send("<h2>Internal Server Error</h2>")
    }
    next();
});

app.listen(3500, () => console.log("server running on 3500 port"));




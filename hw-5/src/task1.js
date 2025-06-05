import express from 'express';

const app = express();

app.use((req, res, next) => {
    const { authorization } = req.headers;
    res.setHeader("Content-Type", "text/plain");

    if (!authorization) {
        res.status(401).send("<h2>Unauthorized</h2>");
    } else {
        res.send("<h2>Authorization header received</h2>");
    }
    next();
});

app.listen(3000, () => console.log("server running on 3000 port"));
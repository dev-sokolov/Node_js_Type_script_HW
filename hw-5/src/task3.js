import express from "express";

const app = express();

app.use((req, res, next) => {
    const { method } = req;
    res.setHeader("Content-Type", "text/plain");

    if (method === "PUT") {
        res.send("<h2>PUT-запрос обработан</h2>")
    } else if (method === "DELETE") {
        res.send("<h2>DELETE-запрос обработан</h2>")
    } else {
        true
    }
    next();
});

app.listen(4000, () => console.log("server running on 4000 port"));
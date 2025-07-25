import express from "express";
import cors from "cors";

const startServer = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.static('public'));

    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`server running on ${port} port`));
}

export default startServer;








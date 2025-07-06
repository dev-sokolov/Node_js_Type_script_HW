import express from "express";
import cors from "cors";
import productsRouter from "./router/products.router.js";

const startServer = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json())

    app.use("/api/products", productsRouter)


    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`))
}

export default startServer;

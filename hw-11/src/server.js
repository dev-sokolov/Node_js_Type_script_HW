import express from "express";
import cors from "cors";
import products from "./db/products_db.js";

const startServer = async () => {
    const app = express();
    app.use(cors());
    app.use(express.json())

    app.get("/products", (req, res) => {
        res.json(products)
    })

    app.get("/products/:id", (req, res) => {
        const product = products.find(p => p.id === parseInt(req.params.id));
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    })

    app.post('/products', (req, res) => {
        const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price,
        };
        products.push(newProduct);
        res.status(201).json(newProduct);

    });

    app.listen(3000, () => console.log(`Server is running on http://localhost:3000`))
}

export default startServer
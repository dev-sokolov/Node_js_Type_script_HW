import * as productsServices from "../services/products.service.js"

export const addProductController = async (req, res) => {
    const result = await productsServices.addProduct(req.body);

    res.status(201).json(result);
};

export const getProductController = async (req, res) => {
    const result = await productsServices.getProduct();

    res.json(result);
}
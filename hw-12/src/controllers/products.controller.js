import * as productsServieces from "../services/products.service.js"

export const addProductController = async (req, res) => {
    try {
        const result = await productsServieces.postProduct(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "added data is incorrect"
        })
        throw error;
    }
}

export const getProductsController = async (req, res) => {
    try {
        const result = await productsServieces.getProducts();
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "request is incorrect"
        })
        throw error;
    }
}

export const getProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productsServieces.getProduct(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "request or id are incorrect"
        })
        throw error;
    }
}

export const changeProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productsServieces.changeProduct(id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "request is failed"
        })
        throw error
    }
}

export const deleteProductController = async (req, res) => {
    const { id } = req.params;
    const result = await productsServieces.deleteProduct(id);
    res.json(result)
}
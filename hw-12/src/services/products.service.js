import Product from "../db/Product.js"

export const postProduct = (payload) => Product.create(payload);

export const getProducts = () => Product.find();

export const getProduct = (id) => Product.findById(id);

export const changeProduct = (id, payload) => Product.findByIdAndUpdate(id, payload, {new: true});

export const deleteProduct = (id) => Product.findByIdAndDelete(id);
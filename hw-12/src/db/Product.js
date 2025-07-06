import { Schema, model } from "mongoose";

export const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    }
}, {versionKey: false, timestamps: true})

const Product = model("breed", productSchema);

export default Product;


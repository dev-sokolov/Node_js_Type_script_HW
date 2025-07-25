import { Schema, model } from "mongoose";

export const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    }
}, { versionKey: false, timestamps: true })

const Product = model("product", productSchema);

export default Product;
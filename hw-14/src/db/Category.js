import { Schema, model } from "mongoose";

export const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    }
}, { versionKey: false, timestamps: true })

const Category = model("category", categorySchema);

export default Category;

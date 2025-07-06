import { Schema, model } from "mongoose";

export const publisherSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    location: {
        type: String,
        required: true,
    }
}, { versionKey: false, timestamps: true })

const Publisher = model("publisher", publisherSchema);

export default Publisher;


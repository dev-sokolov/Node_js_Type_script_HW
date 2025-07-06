import { Schema, model } from "mongoose";

export const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    content: {
        type: String,
        required: true,
        minlength: 10
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: "tag"
        }
    ]
}, { versionKey: false, timestamps: true })

const Article = model("article", articleSchema);

export default Article;


import { Schema, model } from "mongoose";

export const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: "article" 
        }
    ]
}, { versionKey: false, timestamps: true })

const Tag = model("tag", tagSchema);

export default Tag;


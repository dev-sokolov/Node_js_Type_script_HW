import { Schema, model } from "mongoose";

export const magazineSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    issueNumber: {
        type: Number,
        required: true,
        minlength: 4
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publisher",
        required: true
    }
}, { versionKey: false, timestamps: true })

const Magazine = model("magazine", magazineSchema);

export default Magazine;


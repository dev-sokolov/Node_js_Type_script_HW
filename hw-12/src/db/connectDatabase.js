import mongoose from "mongoose";

const { DATABASE_URL } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database successful connected");
    } catch (error) {
        console.log("Failed connection");
        console.log(error);
        throw error
    }
}

export default connectDatabase;



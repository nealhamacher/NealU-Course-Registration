import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
    const url = `${process.env.DATABASE}`;
    try {
        const connection = mongoose.connect(url);
        console.log("Successfully connected to database.");
    } catch(e) {
        console.log("Failed to connect to database.")
    }
};

export default connectDB;


import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
    const url = `mongodb://localhost:27017/nealu`;
    try {
        const connection = mongoose.connect(url);
        console.log("Connected to database.");
    } catch(e) {
        console.log("Failed to connect to database.")
    }
};

export default connectDB;


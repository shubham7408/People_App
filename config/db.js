import mongoose from "mongoose";

async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log({ success: true, message: "Connected to MongoDB" })
        return connect.connection.host;
    } catch (error) {
        console.error(error);
        console.log({ success: false, message: error.message })
        return exit(1);
    }
}

export default connectDB;
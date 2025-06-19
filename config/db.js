import mongoose from "mongoose";

async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        return connect.connection.host;
    } catch (error) {
        logger.error({ success: false, message: error.message, error });
        process.exit(1);
    }
}

export default connectDB;
import mongoose from "mongoose";
import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        // You can add file transports here if needed
    ],
});

async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        logger.info({ success: true, message: "Connected to MongoDB", host: connect.connection.host });
        return connect.connection.host;
    } catch (error) {
        logger.error({ success: false, message: error.message, error });
        process.exit(1);
    }
}

export default connectDB;
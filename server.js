import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 3000;

async function startServer(req, res) {
    try {
        await connectDB().then(() => {
            console.log("Connected to MongoDB");
        });
        const server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
        process.on('SIGTERM', () => {
            console.log('Received SIGTERM. Shutting down gracefully...');
            server.close(() => {
                console.log('Server closed.');
                process.exit(0);
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
        process.exit(1);
    }
}

startServer();
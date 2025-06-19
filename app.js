import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        res.status(200).json({
            success: true, message: "Server is running"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false, message: error.message
        });
    }
});

export default app;

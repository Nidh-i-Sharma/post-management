import express from "express";
import connectDatabase from "./config/db.js";
import postRoutes from "./routes/post.route.js";
import tagRoutes from "./routes/tag.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const database = process.env.MONGO_URI || "mongodb://localhost:27017/post-management";
const PORT = process.env.PORT || 5000;

app.use(express.json());  // Default behavior is `extended: false`
console.log("database", database);

// Connect to the database (await directly in top-level)
try {
    const res= await connectDatabase(database);
    console.log("Database connected successfully", res);
} catch (err) {
    console.log("Database connection failed:", err.message);
}

// API Routes
app.use("/api", postRoutes);
app.use("/api", tagRoutes);

// Listen to the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

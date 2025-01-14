import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./utils/db.js";
import authRoutes from "./routes/authRoute.js";
import menuRoutes from "./routes/menuRoute.js";
import orderRoute from "./routes/orderRoute.js";

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    credentials: true, // Allow cookies or credentials
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  })
);

// Connect to the database
connectDB();

// Define routes
app.use("/", authRoutes);
app.use("/", menuRoutes);
app.use("/", orderRoute);

// Serve static files
app.use("/uploads", express.static("uploads"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

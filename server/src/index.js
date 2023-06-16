// Express
import express from "express";

// Env
import dotenv from "dotenv";

// Config
const app = express();
dotenv.config();

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Listen to port
app.listen(process.env.PORT, () => console.log("Server Running ..."));

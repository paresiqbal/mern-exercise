import express from "express";

// Express App
const app = express();

// Route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Listen to port
app.listen(3001, () => console.log("Server Running ..."));

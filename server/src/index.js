// Library
import express from "express";
import dotenv from "dotenv";

// Route
import { workoutsRouter } from "../routes/Workouts.js";

// config
const app = express();
dotenv.config();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// router
app.use("/workouts", workoutsRouter);

// listen to port
app.listen(process.env.PORT, () => console.log("Server Running ..."));

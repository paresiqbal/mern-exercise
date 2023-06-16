// Library
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

// connect to mongo db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () =>
      console.log("Server is running and connect to db")
    );
  })
  .catch((error) => console.log(error));

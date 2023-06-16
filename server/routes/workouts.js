// Library
import express from "express";

// Models
import { WorkoutsModel } from "../models/WorkoutModel.js";

// Controllers
import { createWorkout } from "../controllers/workoutsController.js";

const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Display all workouts" });
});

// get individual workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get individual workout" });
});

// post a new workout
router.post("/", createWorkout);

// delte a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

// update a workout
router.post("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

export { router as workoutsRouter };

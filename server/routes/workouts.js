// Library
import express from "express";

// Models
import { WorkoutsModel } from "../models/WorkoutModel.js";

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Display all workouts" });
});

// Get individual workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get individual workout" });
});

// Post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await WorkoutsModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delte a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

// Update a workout
router.post("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

export { router as workoutsRouter };

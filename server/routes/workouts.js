// Library
import express from "express";

// Models
import { WorkoutsModel } from "../models/WorkoutModel.js";

// Controllers
import {
  getAllWorkouts,
  getIndividualWorkout,
  createWorkout,
} from "../controllers/workoutsController.js";

const router = express.Router();

// get all workouts
router.get("/", getAllWorkouts);

// get individual workout
router.get("/:id", getIndividualWorkout);

// post a new workout
router.post("/", createWorkout);

// delte a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

export { router as workoutsRouter };

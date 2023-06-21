// Library
import express from "express";

// Models
import { WorkoutsModel } from "../models/WorkoutModel.js";

// Middleware
import { requireAuth } from "../middleware/requireAuth.js";

// Controllers
import {
  createWorkout,
  getAllWorkouts,
  getIndividualWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutsController.js";

const router = express.Router();
router.use(requireAuth);

// get all workouts
router.get("/", getAllWorkouts);

// get individual workout
router.get("/:id", getIndividualWorkout);

// post a new workout
router.post("/", createWorkout);

// delte a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

export { router as workoutsRouter };

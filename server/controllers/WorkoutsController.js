// Library
import mongoose from "mongoose";

// Models
import { WorkoutsModel } from "../models/WorkoutModel.js";

// get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await WorkoutsModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get individual workout
const getIndividualWorkout = async (req, res) => {
  const { id } = req.params;

  // check valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutsModel.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add new doc to db
  try {
    const workout = await WorkoutsModel.create({ title, load, reps });

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createWorkout, getAllWorkouts, getIndividualWorkout };

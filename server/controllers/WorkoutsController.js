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
    return res.status(404).json({ error: "No such workout 😢" });
  }

  const workout = await WorkoutsModel.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout 😢" });
  }

  res.status(200).json(workout);
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // let empetyFields = [];

  // if (!title) {
  //   empetyFields.push("title");
  // }
  // if (!load) {
  //   empetyFields.push("load");
  // }
  // if (!reps) {
  //   empetyFields.push("reps");
  // }
  // if (empetyFields.length > 0) {
  //   return res
  //     .status(400)
  //     .json({ error: "Please fill in all the field", empetyFields });
  // }

  // add new doc to db
  try {
    const user_id = req.user_id;
    const workout = await WorkoutsModel.create({ title, load, reps, user_id });

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  // check valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout 😢" });
  }

  // find workout base from id and all of the model schema
  const workout = await WorkoutsModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // check valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  // find workout with the correct id and delete it
  const workout = await WorkoutsModel.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

export {
  createWorkout,
  getAllWorkouts,
  getIndividualWorkout,
  deleteWorkout,
  updateWorkout,
};

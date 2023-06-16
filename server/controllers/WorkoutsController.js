// Models
import { WorkoutsModel } from "../models/WorkoutModel";

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

export { createWorkout };

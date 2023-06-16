// Library
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  title: { type: String, require: true },
  reps: { type: Number, require: true },
  load: { type: Number, require: true },
});

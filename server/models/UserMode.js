import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export const UserModel = mongoose.model("user", UserSchema);

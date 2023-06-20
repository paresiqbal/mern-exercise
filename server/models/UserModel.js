// Library
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

// static signup method
UserSchema.static.signup = async function (email, password) {
  const emailExists = await this.findOne({ email });

  if (emailExists) {
    throw Error("Email already in use");
  }

  // hash user password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // save to db
  const user = await this.create({ email, password: hash });

  return user;
};

export const UserModel = mongoose.model("user", UserSchema);

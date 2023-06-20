import { UserModel } from "../models/UserModel.js";

// Library
import jwt from "jsonwebtoken";

// create token for id
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRETE, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    // create token
    const token = createToken(user._id);

    // response
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);

    // create token
    const token = createToken(user._id);

    // response
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signUser };

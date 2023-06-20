import { UserModel } from "../models/UserModel.js";

// login user
const loginUser = async (req, res) => {
  res.json({ message: "Login success" });
};

// signup user
const signUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);

    // response
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signUser };

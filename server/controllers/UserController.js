// login user
const loginUser = async (req, res) => {
  res.json({ message: "Login success" });
};

// signup user
const signUser = async (req, res) => {
  res.json({ message: "Signup success" });
};

export { loginUser, signUser };

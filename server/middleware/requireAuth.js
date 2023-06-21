import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel.js";

const requireAuth = async (req, res, next) => {
  // verify authentification
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorazitaion token require" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRETE);

    req.user = await UserModel.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorize" });
  }
};

export { requireAuth };

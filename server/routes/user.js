// Library
import express from "express";

import { signUser, loginUser } from "../controllers/UserController";

// router setup
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signUser);

export { router as userRouter };

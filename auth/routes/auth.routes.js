import express from "express";
import {
  registerUser,
  login,
  getUsers,
  getSingleUser,
  profile,
} from "../controllers/auth.controller.js";
import { verifyRole } from "../../shared/middlewares/verifyRole.js";
import { verifyToken } from "../../shared/middlewares/verifyToken.js";

const router = express.Router();

router.post("/register/user", registerUser);

router.post("/login", login);

router.get("/users", verifyToken, verifyRole("client"), getUsers);
// router.get("/user/:username", verifyToken, verifyRole("admin"), getSingleUser);
router.get("/profile", verifyToken, profile);

export default router;

import { Router } from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUsersByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = Router();
router.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.route("/profile").put(updateUserProfile).get(getUserProfile);
router.route("/:id").delete(deleteUser).get(getUsersByID).put(updateUser);

export default router;

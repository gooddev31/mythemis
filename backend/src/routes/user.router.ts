import express from "express";
import {
  updateUser,
  getUserById,
  deleteUser,
  getAllUsers,
} from "../controllers/user.controller";
import { validateId } from "../middleware/validate.middleware";
import User from "../models/user.model";

const router = express.Router();

router.param("id", validateId(User));
router.get("/:id", getUserById);
router.route("/").get(getAllUsers).patch(updateUser).delete(deleteUser);

module.exports = router;

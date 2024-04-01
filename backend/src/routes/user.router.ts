import express from "express";
import { getFoldersByUserId, getTeamsFoldersByUserId, getUser } from "../controllers/user.controller";
import { authenticate } from "../common/middlewares/auth.middleware";

const router = express.Router();

router.get("/:userId", getUser);
router.get("/folders/:userId", authenticate, getFoldersByUserId)
router.get('/folders/teams/:userId', authenticate, getTeamsFoldersByUserId)

export default router;

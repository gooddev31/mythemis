import express from "express";
import {
  addMember,
  createTeam,
  deleteMember,
  updateMemberRole,
  validateId,
  validateUser,
  getAllMembers,
} from "../controllers/team.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";
import {
  createFolderForTeam,
  deleteFolderFromTeam,
  getFoldersForTeam,
  updateFolder,
} from "../controllers/folder.controller";

const router = express.Router();

router.use(authenticate);

router.post("/", createTeam);

router.param("id", validateId);

router
  .route("/:id/member")
  .all(validateUser, authorize)
  .post(addMember)
  .delete(deleteMember)
  .patch(updateMemberRole);

router.get("/:id/members", getAllMembers);

router.get("/:id/folders", getFoldersForTeam);
router.route("/:id/folders").post(authorize, createFolderForTeam);

router
  .route("/:id/folders/:folderId")
  .all(authorize)
  .delete(deleteFolderFromTeam)
  .put(updateFolder);

module.exports = router;

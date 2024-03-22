import express from "express";
import {
  createFolder,
  deleteFolder,
  getFolder,
  getUserFolders,
  updateFolder,
  validateId,
  checkPermissions,
} from "../controllers/folder.controller";
const itemRouter = require("./item.router");
const router = express.Router();

router.param("id", validateId);

router.get("/my", getUserFolders);

router.route("/").get(getFolder).post(createFolder);
router
  .route("/:id")
  .all(checkPermissions)
  .delete(deleteFolder)
  .patch(updateFolder);

router.use("/:id/item", itemRouter);

module.exports = router;

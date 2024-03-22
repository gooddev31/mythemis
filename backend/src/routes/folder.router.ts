import express from "express";
import {
  createFolder,
  deleteFolder,
  getFolder,
  getUserFolders,
  updateFolder,
  checkPermissions,
} from "../controllers/folder.controller";
import { validateId } from "../middleware/validate.middleware";
import Folder from "../models/folder.model";
const itemRouter = require("./item.router");
const router = express.Router();

router.param("id", validateId(Folder));

router.get("/my", getUserFolders);

router.route("/").get(getFolder).post(createFolder);
router
  .route("/:id")
  .all(checkPermissions)
  .delete(deleteFolder)
  .patch(updateFolder);

router.use("/:id/item", itemRouter);

module.exports = router;

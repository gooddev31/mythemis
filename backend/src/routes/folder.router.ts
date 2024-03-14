import express from "express";
import {createFolder, deleteFolder, getFolder, updateFolder} from "../controllers/folder.controller";
const itemRouter = require('./item.router')
const router = express.Router();

router.get('/:id', getFolder)
router.get('/', getFolder)

router.post("/", createFolder)
router.delete("/delete/:id", deleteFolder)
router.put("/update/:id", updateFolder)

router.use("/item/", itemRouter)

module.exports = router;

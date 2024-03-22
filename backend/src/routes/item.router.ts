import express from "express";
import {
  addItem,
  deleteItem,
  getItem,
  updateItem,
} from "../controllers/item.controller";

const router = express.Router();

router.get("/:id", getItem);
router.get("/", getItem);
router.post("/", addItem);
router.delete("/delete/:id", deleteItem);
router.put("/update/:id", updateItem);

module.exports = router;

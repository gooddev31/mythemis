import express from "express";
import {
  createEvent,
  getAllUserEvents,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller";
import { validateId } from "../middleware/validate.middleware";
import Event from "../models/event.model";

const router = express.Router();

router.route("/").post(createEvent).get(getAllUserEvents);

router.param("id", validateId(Event));
router.route("/:id").patch(updateEvent).delete(deleteEvent);

export default router;

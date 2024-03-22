import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";
import IEvent from "../intefaces/event.interface";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  creator: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});
const Event = mongoose.model("Event", eventSchema);

export default Event;

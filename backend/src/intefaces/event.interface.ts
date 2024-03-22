import { ObjectId } from "mongoose";

interface IEvent extends Document {
  name: string;
  description?: string;
  date: Date;
  status: "pending" | "completed";
  creator: ObjectId;
}
export default IEvent;

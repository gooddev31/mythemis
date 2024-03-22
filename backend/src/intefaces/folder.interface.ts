import { ObjectId } from "mongoose";
import IItem from "./item.interface";

interface IFolder extends Document {
  name: string;
  creator: { id: ObjectId; username: String };
  items?: Array<IItem>;
  createDate: Date;
  lastEdit?: Date;
  status?: boolean;
  favourite: boolean;
}
export default IFolder;

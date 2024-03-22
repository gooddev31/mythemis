import { ObjectId } from "mongoose";

interface IItem {
  name: string;
  payload?: string;
  createDate: Date;
  folder: {
    id: ObjectId;
  };
  creator: {
    id: ObjectId;
    username: string;
  };
  lastEdit?: Date;
}
export default IItem;

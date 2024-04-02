import { ObjectId } from 'mongoose';

export default interface Item extends Document {
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

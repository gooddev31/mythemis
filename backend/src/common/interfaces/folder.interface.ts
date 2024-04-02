import { ObjectId, Document } from 'mongoose';
import Item from './item.interface';
import File from './file.interface';

export default interface Folder extends Document {
  name: string;
  creator: { id: ObjectId; username: string };
  files: Array<File>;
  items?: Array<Item>;
  createDate: Date;
  lastEdit?: Date;
  status?: boolean;
  favourite: boolean;
}

export interface FolderBasicInfo {
  _id: ObjectId;
  name: string;
  items: Array<Item>;
}

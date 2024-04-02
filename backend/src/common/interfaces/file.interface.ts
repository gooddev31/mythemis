import { Document } from 'mongoose';

export default interface File extends Document {
  name: string;
  createDate: Date;
}

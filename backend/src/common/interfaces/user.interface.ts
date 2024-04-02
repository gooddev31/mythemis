import { ObjectId, Document } from 'mongoose';
import IFolder from './folder.interface';
import ITeam from './team.interface';

export default interface User extends Document {
  username: string;
  password: string;
  email: string;
  telephone: number;
  age?: number;
  folders?: Array<IFolder>;
  teams?: Array<ITeam>;
  company?: string;
  registerDate: Date;
  subscribe?: Date;
  comparePassword: (enteredPassword: string) => boolean;
}

export interface UserBasicInfo {
  _id: ObjectId;
  username: string;
  email: string;
}

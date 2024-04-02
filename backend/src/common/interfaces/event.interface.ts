import { Document } from 'mongoose';

export enum Status {
  ACTIVE = 'Active',
  END = 'Ended'
}

export default interface Event extends Document {
  title: string;
  timeline: string;
  status: Status;
}

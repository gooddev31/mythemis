import { Document } from 'mongoose';

export interface Pagination {
  amount: number;
  page: number;
}

export default interface File extends Document {
  path: string;
  theme: string;
  date: Date;
}

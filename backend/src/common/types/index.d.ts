import { FolderBasicInfo } from '../interfaces/folder.interface';
import { UserBasicInfo } from '../interfaces/user.interface';
import 'express';

declare global {
  namespace Express {
    export interface Request {
      user?: UserBasicInfo | null;
      folder?: FolderBasicInfo | null;
      userId: string;
    }
  }
}

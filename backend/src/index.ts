import * as dotenv from 'dotenv';

import bodyParser from 'body-parser';
import dbConnect from './common/configs/dbConnect.config';
import mongoose from 'mongoose';
import { loggerMiddleware, logEvents } from './common/middlewares/logger.middleware';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AuthRouter from './routes/auth.route';
import FolderRouter from './routes/folder.route';
import UserRouter from './routes/user.route';
import { errorHandlerMiddleware } from './common/middlewares/errorHandler.middleware';
import { authenticate } from './common/middlewares/auth.middleware';
import express, { Express } from 'express';
import helmet from 'helmet';
import allowedOriginsConfig from './common/configs/allowedOrigins.config';
import { FolderBasicInfo } from './common/interfaces/folder.interface';
import { UserBasicInfo } from './common/interfaces/user.interface';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      user?: UserBasicInfo | null;
      folder?: FolderBasicInfo | null;
      userId: string;
    }
  }
}

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

dbConnect();

app.use(express.static('public'));
app.use(loggerMiddleware);
app.use(helmet());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: allowedOriginsConfig,
    credentials: true,
    optionsSuccessStatus: 200
  })
);

app.use('/auth', AuthRouter);
app.use('/users', authenticate, UserRouter);
app.use('/folders', authenticate, FolderRouter);
app.use('/events', authenticate, FolderRouter);

app.use(errorHandlerMiddleware);

mongoose.connection.once('open', () => {
  console.log('Connection to MongoDB success');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (error) => {
  console.log(error);
  logEvents(`${error}: ${error.code}\t${error.syscall}\t${error.hostname}`, 'mongoErrLog.log');
});

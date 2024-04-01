import * as dotenv from 'dotenv';
import 'express-async-errors';

import bodyParser from "body-parser";
import dbConnect from "./common/configs/dbConnect.config";
import mongoose from "mongoose";
import { loggerMiddleware, logEvents } from "./common/middlewares/logger.middleware";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from './routes/auth.router';
import FolderRouter from './routes/folder.router';
import UserRouter from './routes/user.router';
import { errorHandlerMiddleware } from './common/middlewares/errorHandler.middleware';
import { authenticate } from "./common/middlewares/auth.middleware";
import express, { Express, Request } from "express";
import helmet from "helmet";
import allowedOriginsConfig from './common/configs/allowedOrigins.config';
import { FolderBasicInfo } from './common/interfaces/folder.interface';
import { UserBasicInfo } from './common/interfaces/user.interface';

declare global {
    namespace Express {
        interface Request {
            user?: UserBasicInfo | any | null;
            folder?: FolderBasicInfo | null;
            userId: string;
        }
    }
}

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001

dbConnect();

app.use(loggerMiddleware);
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json())
app.use(cors({
    origin: allowedOriginsConfig,
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use("/auth", AuthRouter)
app.use("/users", authenticate, UserRouter)
app.use("/folders", authenticate, FolderRouter)

app.use(errorHandlerMiddleware)

mongoose.connection.once("open", () => {
    console.log("Connection to MongoDB success");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', (err:any) => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
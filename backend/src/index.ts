import IItem from "./intefaces/item.interface";

require("dotenv").config();
require('express-async-errors')

const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect.config");
const mongoose = require("mongoose");
const {logger, logEvents} = require("./middleware/logger.middleware");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsConfig = require('./config/corsConfig.config');
const AuthRouter = require('./routes/auth.router')
const FolderRouter = require('./routes/folder.router')
const UserRouter = require('./routes/user.router')
const {errorHandlerMiddleware} = require('./middleware/errorHandler.middleware')
import {authenticate} from "./middleware/auth.middleware";

import express, { Express, Request, Response } from "express";
import {ObjectId} from "mongodb";
import helmet from "helmet";



const app: Express = express();
const PORT = process.env.PORT || 3001

interface UserBasicInfo {
    _id: ObjectId;
    username: string;
    email: string;
}
interface FolderBasicInfo {
    _id: ObjectId;
    name: string;
    items: Array<IItem>
}

declare global {
    namespace Express {
        interface Request {
            user?: UserBasicInfo | null;
            folder?: FolderBasicInfo| null
        }
    }
}

dbConnect();

app.use(logger);
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json())
app.use(cors(corsConfig))

app.use(AuthRouter)
app.use("/user", authenticate, UserRouter)
app.use("/folder",authenticate, FolderRouter)

app.use(errorHandlerMiddleware)

mongoose.connection.once("open", () => {
    console.log("Connection to MongoDB success");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', (err:any) => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
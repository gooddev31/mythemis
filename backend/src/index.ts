require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const {logger, logEvents} = require("./middleware/logger");
const cors = require("cors");
const corsConfig = require('./config/corsConfig');
const errorHandler = require('./middleware/errorHandler')
import express, { Express, Request, Response } from "express";
const app: Express = express();
const PORT = process.env.PORT || 3001

dbConnect();

app.use(logger);
app.use(express.json())
app.use(cors(corsConfig))

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use(errorHandler)

mongoose.connection.once("open", () => {
    console.log("Connection to MongoDB success");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error', (err:any) => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
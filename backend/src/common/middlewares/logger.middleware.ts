const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
import {Request, Response, NextFunction} from "express";

export const logEvents = async (message:string, logFileName:string) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem);
    } catch (err) {
        console.log(err);
    }
}

export const loggerMiddleware = (req:Request, res:Response, next: NextFunction) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
    console.log(`${req.method} ${req.path}`);
    next();
}

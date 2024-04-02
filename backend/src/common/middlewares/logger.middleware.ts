import fs from 'node:fs';
import path from 'node:path';

import { Request, Response, NextFunction } from 'express';
import { CryptoUtil } from '../utils/crypto.util';

const logEvents = async (message: string, logFileName: string) => {
  const uuid = await CryptoUtil.generateUUID();

  const dateTime = new Date();
  const logItem = `${dateTime}\t${uuid}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '../..', 'logs'))) {
      await fs.promises.mkdir(path.join(__dirname, '../..', 'logs'));
    }
    await fs.promises.appendFile(path.join(__dirname, '../..', 'logs', logFileName), logItem);
  } catch (error) {
    console.log(error);
  }
};

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
  console.log(`${req.method} ${req.path}`);
  next();
};

export { logEvents, loggerMiddleware };

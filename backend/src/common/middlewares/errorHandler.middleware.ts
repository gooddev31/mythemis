import { logEvents } from './logger.middleware';
import { Response, Request } from 'express';

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    'errLog.log'
  );
  console.log(err.stack);

  if (err instanceof AuthenticationError) {
    res.status(401).json({ message: 'Unauthorized: ' + err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

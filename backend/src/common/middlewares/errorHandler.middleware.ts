import { logEvents } from './logger.middleware';
import { Response, Request } from 'express';

export const errorHandlerMiddleware = (error: Error, req: Request, res: Response) => {
  logEvents(
    `${error.name}: ${error.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    'errLog.log'
  );

  if (error instanceof AuthenticationError) {
    return res.status(401).json({ message: 'Unauthorized: ' + error.message });
  } else {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

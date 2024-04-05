import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const ValidateMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = {};
    errors.array().map((error: unknown) => {
      if (error instanceof Error) {
        error = error.message;
      }
    });
    return res.status(422).json({ error });
  }
  next();
};
export default ValidateMiddleware;

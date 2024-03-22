import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Document, Model } from "mongoose";

const ValidateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error: any = {};
    errors.array().map((err: any) => (error[err.param] = err.msg));
    return res.status(422).json({ error });
  }
  next();
};

const validateId =
  (Model: Model<any>) =>
  async (req: Request, res: Response, next: NextFunction, id: string) => {
    try {
      const item = await Model.findById(id);

      if (!item) {
        return res.status(404).json({ error: `${Model.modelName} not found` });
      }

      res.locals[Model.modelName.toLowerCase()] = item;
      next();
    } catch (error) {
      console.error(`Error validating ${Model.modelName} ID:`, error);
      res
        .status(500)
        .json({ error: `Failed to validate ${Model.modelName} ID` });
    }
  };

export { ValidateMiddleware, validateId };

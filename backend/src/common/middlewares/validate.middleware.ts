import {Request, Response, NextFunction} from "express";
import { validationResult } from "express-validator";

const ValidateMiddleware = (req: Request, res : Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let error = {};
        errors.array().map((err: any) => (error['err.param'] = err.msg));
        return res.status(422).json({ error });
    }
    next();
}
export default ValidateMiddleware
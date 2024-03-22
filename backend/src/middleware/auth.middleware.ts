import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";
import asyncHandler from "express-async-handler";
const { AuthenticationError } = require("./errorHandler.middleware");
import { UserRole, TeamModel } from "../models/team.model";

const authenticate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.cookies.jwt;
      if (!token) {
        throw new AuthenticationError("Token not found");
      }

      const jwtSecret = process.env.JWT_TOKEN || "";
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

      if (!decoded || !decoded.userId) {
        throw new AuthenticationError("UserId not found");
      }

      const user = await User.findById(decoded.userId);

      if (!user) {
        throw new AuthenticationError("User not found");
      }

      req.user = user;
      next();
    } catch (e) {
      throw new AuthenticationError("Invalid token");
    }
  }
);

const authorize = async (req: Request, res: Response, next: Function) => {
  const team = res.locals.team;
  const userId = req.user?._id;
  const user = team.users.find((user: any) => (user.userId = userId));
  if (user && user.role !== UserRole.ADMIN) {
    return res.status(403).json({ error: "Access forbidden" });
  }
  next();
};

export { authenticate, authorize };

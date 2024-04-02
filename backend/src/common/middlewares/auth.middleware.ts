import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../../models/user.model';
import asyncHandler from 'express-async-handler';
import { AuthenticationError } from './errorHandler.middleware';
import { UserBasicInfo } from '../interfaces/user.interface';

const authenticate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new AuthenticationError('Token not found');
    }

    const jwtSecret = process.env.JWT_TOKEN || '';
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

    if (!decoded || !decoded.userId) {
      throw new AuthenticationError('UserId not found');
    }

    const user = await User.findById(decoded.userId, '_id name email');

    if (!user) {
      throw new AuthenticationError('User not found');
    }

    req.user = user as unknown as UserBasicInfo;
    next();
  } catch (e) {
    throw new AuthenticationError('Invalid token');
  }
});

export { authenticate };

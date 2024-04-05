import jwt from 'jsonwebtoken';

export default class JwtUtil {
  public static generateToken(userId: string) {
    const jwtSecret = process.env.JWT_TOKEN || '';
    const token = jwt.sign({ userId }, jwtSecret, {
      expiresIn: '1h'
    });

    return token;
  }
}

import User from '../../models/user.model';
import JwtUtil from '../../common/utils/jwt.util';

export default class AuthService {
  public async register({ email, telephone, username, password }) {
    const userExistEmail = await User.findOne({ email });
    const userExistTelephone = await User.findOne({ telephone });
    if (userExistEmail || userExistTelephone) {
      return {
        message: 'The user already exists',
        data: null,
        status: 201
      };
    } else {
      const user = await User.create({
        username,
        email,
        password,
        telephone
      });
      if (user) {
        const token = JwtUtil.generateToken(user._id.toString());
        return {
          message: 'User was registered',
          data: {
            token,
            user: {
              id: user._id,
              name: user.username,
              email: user.email,
              telephone: user.telephone
            }
          },
          status: 201
        };
      } else {
        return {
          message: 'An error occurred in creating the user',
          data: null,
          status: 201
        };
      }
    }
  }

  public async login({ email, password }) {
    const user = await User.findOne({ email });
    if (user && user!.comparePassword(password)) {
      const token = JwtUtil.generateToken(user!._id.toString());
      return {
        message: 'User was logged in',
        data: { token, user: { id: user!._id, name: user!.username, email: user!.email } },
        status: 200
      };
    } else {
      return {
        message: 'User not found / password incorrect',
        data: null,
        status: 400
      };
    }
  }
}

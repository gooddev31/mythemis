import { Request, Response } from 'express';
import AuthService from './auth.service';

export default class AuthController {
  public constructor(private readonly authService: AuthService) {}

  public async register(req: Request, res: Response) {
    const body = req.body;

    const registered = await this.authService.register(body);

    return res.status(registered.status).json(registered);
  }

  public async login(req: Request, res: Response) {
    const body = req.body;

    const logged = await this.authService.login(body);

    return res.status(logged.status).json(logged);
  }

  public async logout(_req: Request, res: Response) {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0)
    });
    return res.status(200).json({ message: ' logged out' });
  }
}

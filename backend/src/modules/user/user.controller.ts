import { Request, Response } from 'express';
import UserService from './user.service';

export default class UserController {
  public constructor(private readonly userService: UserService) {}

  public async addUserToTeamByIds(req: Request, res: Response) {
    const teamId = req.params.teamId;
    const userId = req.params.userId;

    const user = await this.userService.addUserToTeamByIds(teamId, userId);

    return res.status(user.status).json(user);
  }

  public async getTeamsFoldersByUserId(req: Request, res: Response) {
    const userId = req.params.userId;

    const folders = await this.userService.getTeamsFoldersByUserId(userId);

    return res.status(folders.status).json(folders);
  }

  public async updateUserById(req: Request, res: Response) {
    const userId = req.params.userId;

    const body = req.body;

    const user = await this.userService.updateUserById(userId, body);

    return res.status(user.status).json(user);
  }

  public async getUserById(req: Request, res: Response) {
    const userId = req.params.userId;

    const user = await this.userService.getUserById(userId);

    return res.status(user.status).json(user);
  }
}

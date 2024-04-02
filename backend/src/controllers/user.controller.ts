import { Request, Response } from 'express';
import User from '../models/user.model';
import Folder from '../models/folder.model';
import Team from '../models/team.model';
import { ObjectId } from 'mongodb';

export default class UserController {
  public async addUserToTeamByIds(req: Request, res: Response) {
    const teamId = req.params.teamId;
    const userId = req.params.userId;

    const team = await Team.findOne({ _id: teamId });

    if (!team) {
      return res.status(404).json({
        message: 'Team not found'
      });
    }

    const addUser = await Team.findOneAndUpdate(
      {
        _id: team._id
      },
      {
        $addToSet: {
          users: {
            userId
          }
        }
      },
      { new: true }
    );

    return res.status(200).json(addUser);
  }

  public async getTeamsFoldersByUserId(req: Request, res: Response) {
    const userId = req.params.userId;

    const teams = await Team.find({
      'users.userId': new ObjectId(userId)
    });

    if (!teams) {
      return res.status(404).json({
        message: 'Team not found'
      });
    }

    const folderIds = teams.map((team) => team.folders).flat();
    const folders = await Folder.find({
      _id: { $in: folderIds }
    });

    return res.status(200).json(folders);
  }

  public async updateUserById(req: Request, res: Response) {
    const userId = req.params.userId;

    const { username, email, company, subscribe, telephone } = req.body;

    const user = await User.findByIdAndUpdate(
      {
        _id: new ObjectId(userId)
      },
      {
        username,
        email,
        company,
        subscribe,
        telephone
      },
      {
        id: true,
        email: true,
        username: true,
        company: true,
        telephone: true,
        subscribe: true
      }
    );

    return res.status(200).json(user);
  }

  public async getUser(req: Request, res: Response) {
    const userId = req.params.userId;

    const user = await User.findById(userId, {
      id: true,
      username: true,
      email: true
    });

    if (!user) {
      return res.status(400);
    }

    return res.status(200).json(user);
  }
}

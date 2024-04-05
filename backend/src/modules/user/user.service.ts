import User from '../../models/user.model';
import Folder from '../../models/folder.model';
import Team from '../../models/team.model';
import { ObjectId } from 'mongodb';
import { UpdateUserDto } from './dto/update-user.dto';

export default class UserService {
  public async addUserToTeamByIds(teamId: string, userId: string) {
    const team = await Team.findByIdAndUpdate(
      {
        _id: new ObjectId(teamId)
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

    if (!team) {
      return {
        message: 'Team not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'User was added to team',
      data: {
        team
      },
      status: 200
    };
  }

  public async getTeamsFoldersByUserId(userId: string) {
    const teams = await Team.find({
      'users.userId': new ObjectId(userId)
    });

    if (!teams) {
      return {
        message: 'Teams not found',
        data: null,
        status: 404
      };
    }

    const folderIds = teams.map((team) => team.folders).flat();
    const folders = await Folder.find({
      _id: { $in: folderIds }
    });

    return {
      message: 'Folders was found',
      data: {
        folders
      },
      status: 200
    };
  }

  public async updateUserById(userId: string, updates: UpdateUserDto) {
    const user = await User.findByIdAndUpdate(
      {
        _id: new ObjectId(userId)
      },
      updates,
      {
        id: true,
        email: true,
        username: true,
        company: true,
        telephone: true,
        subscribe: true
      }
    );

    if (!user) {
      return {
        message: 'User not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'User was updated',
      data: {
        user
      },
      status: 200
    };
  }

  public async getUserById(id: string) {
    const user = await User.findById(id,
      {
        id: true,
        username: true,
        email: true
      }
    );

    if (!user) {
      return {
        message: 'User not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'User was found',
      data: {
        user
      },
      status: 200
    };
  }
}

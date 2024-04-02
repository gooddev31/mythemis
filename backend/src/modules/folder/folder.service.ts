import Folder from '../../models/folder.model';
import { ObjectId } from 'mongodb';
import User from '../../models/user.model';

export default class FolderService {
  public async getFolders(amount: number, page: number) {
    const folders = await Folder.find()
      .limit(amount)
      .skip((page - 1) * amount + page - 1 === 0 ? null : 1);

    if (!folders) {
      return {
        message: 'Folders not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'Folders were found',
      data: {
        folders
      },
      status: 200
    };
  }

  public async getFoldersByUserId(id: string) {
    const user = await User.findOne(
      { _id: new ObjectId(id) },
      {
        id: true,
        username: true,
        email: true,
        telephone: true,
        registerDate: true
      }
    );

    if (!user) {
      return {
        message: 'User not found',
        data: null,
        status: 404
      };
    }

    const folder = await Folder.find({
      creator: { id: user._id }
    });

    return {
      message: 'Folders with user were found',
      data: {
        user,
        folder
      },
      status: 200
    };
  }

  public async createFolder({ name, creator }) {
    const folder = await Folder.create({
      name,
      creator
    });

    return {
      message: 'Folder was created',
      data: {
        folder
      },
      status: 201
    };
  }

  public async deleteFolder(id: string) {
    const folder = await Folder.findOne({ _id: new ObjectId(id) });

    if (!folder) {
      return {
        message: 'Folder not found',
        data: null,
        status: 404
      };
    }

    await Folder.deleteOne({ _id: new ObjectId(id) });

    return {
      message: 'Folder was deleted',
      data: null,
      status: 200
    };
  }

  public async updateFolder(id: string, { name, favourite, status }) {
    const folder = await Folder.findOne({ _id: new ObjectId(id) });

    if (!folder) {
      return {
        message: 'Folder not found',
        data: null,
        status: 404
      };
    }

    const updated = await Folder.updateOne(
      { _id: folder.id },
      {
        name,
        favourite,
        status
      }
    );

    return {
      message: 'Folder was updated',
      data: {
        folder: updated
      },
      status: 200
    };
  }
}

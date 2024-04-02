import { Response, Request } from 'express';
import Folder from '../models/folder.model';
import { ObjectId } from 'mongodb';
import User from '../models/user.model';

export default class FolderController {
  public async getFolder(req: Request, res: Response) {
    const page = req.params.page ? Number(req?.query?.page) : 1;
    const amount = req.query.amount ? Number(req?.query?.amount) : 5;
    if (!req.query.id && !req.query.page && !req.query.amount) {
      const Folders = await Folder.find({});
      if (Folders) {
        return res.status(200).json({
          message: {
            Folders
          }
        });
      } else {
        return res.status(400).json({ message: 'No Folders' });
      }
    } else if (!req.query.id) {
      const Folders = await Folder.find({})
        .limit(Number(amount))
        .skip(Number((page - 1) * amount + Number(page - 1 === 0 ? null : 1)));
      if (Folders) {
        return res.status(200).json({
          message: {
            Folders
          }
        });
      } else {
        return res.status(400).json({ message: 'No Folders' });
      }
    }
  }

  public async getFoldersByUserId(req: Request, res: Response) {
    const id = req.params.userId;

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
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const folder = await Folder.find({
      creator: { id: new ObjectId(user._id) }
    });

    return res.status(200).json({
      user,
      folder
    });
  }

  public async createFolder(req: Request, res: Response) {
    const { name, creator } = req.body;
    const folder = await Folder.create({
      name,
      creator
    });
    if (folder) {
      return res.status(200).json({ folder });
    }
  }

  public async deleteFolder(req: Request, res: Response) {
    const folderId = req.params.id;
    if (await Folder.findOne({ folderId })) {
      await Folder.deleteOne({ _id: folderId });
      return res.status(204).json({ message: 'Deleted' });
    } else {
      return res.status(404).json({ message: 'Not found' });
    }
  }

  public async updateFolder(req: Request, res: Response) {
    const { name, favourite, status } = req.body;
    const folderId = req.params.id;
    if (await Folder.findOne({ _id: folderId })) {
      await Folder.updateOne(
        { _id: folderId },
        {
          name,
          favourite,
          status
        }
      );
      return res.status(202).json({ message: 'Updated' });
    } else {
      return res.status(404).json({ message: 'Not found' });
    }
  }
}

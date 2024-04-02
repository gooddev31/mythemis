import Item from '../models/item.model';
import { Request, Response } from 'express';
import Folder from '../models/folder.model';

export default class ItemController {
  public async getItem(req: Request, res: Response) {
    const ItemId = req.query.id;
    if (ItemId) {
      const Items = await Item.findOne({ ItemId });
      if (Items) {
        return res.status(200).json({
          message: {
            Items
          }
        });
      } else {
        return res.status(400).json({ message: 'No Items' });
      }
    } else if (ItemId === '0') {
      const Items = await Item.findOne({});
      if (Items) {
        return res.status(200).json({
          message: {
            Items
          }
        });
      } else {
        return res.status(400).json({ message: 'No Items' });
      }
    }
  }

  public async addItem(req: Request, res: Response) {
    const { name, payload, creator, folder } = req.body;

    const item = await Item.create({
      name,
      payload,
      creator,
      folder
    });

    if (item && (await Folder.findOne({ _id: folder.id }))) {
      return res.status(200).json({ message: item });
    } else {
      return res.status(400).json({ message: "Item can't create" });
    }
  }
  public async deleteItem(req: Request, res: Response) {
    const FolderId = req.params.id;
    if (await Item.findOne({ FolderId })) {
      await Item.deleteOne({ _id: FolderId });
      return res.status(204).json({ message: 'Deleted' });
    } else {
      return res.status(404).json({ message: 'Not found' });
    }
  }
  public async updateItem(req: Request, res: Response) {
    const { name, favourite, status } = req.body;
    const FolderId = req.params.id;
    if (await Item.findOne({ _id: FolderId })) {
      await Item.updateOne(
        { _id: FolderId },
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

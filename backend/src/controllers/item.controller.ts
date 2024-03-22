import ItemModel from "../models/item.model";
import { Request, Response } from "express";
import FolderModel from "../models/folder.model";

const getItem = async (req: Request, res: Response) => {
  const ItemId = req.query.id;
  if (ItemId) {
    const Items = await ItemModel.findOne({ ItemId });
    if (Items) {
      res.status(200).json({
        message: {
          Items,
        },
      });
    } else {
      res.status(400).json({ message: "No Items" });
    }
  } else {
    const Items = await ItemModel.findOne({});
    if (Items) {
      res.status(200).json({
        message: {
          Items,
        },
      });
    } else {
      res.status(400).json({ message: "No Items" });
    }
  }
};

const addItem = async (req: Request, res: Response) => {
  try {
    const { name, payload } = req.body;
    const userId = req.user?._id;
    const username = req.user?.username;
    const folderId = res.locals.folder._id;

    const item = await ItemModel.create({
      name,
      payload,
      creator: { id: userId, username },
      folder: { id: folderId },
    });

    if (item) {
      res.status(200).json(item);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create item" });
  }
};

const deleteItem = async (req: Request, res: Response) => {
  const FolderId = req.params.id;
  if (await ItemModel.findOne({ FolderId })) {
    await ItemModel.deleteOne({ _id: FolderId });
    res.status(204).json({ message: "Deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

const updateItem = async (req: Request, res: Response) => {
  const { name, favourite, status } = req.body;
  const FolderId = req.params.id;
  if (await ItemModel.findOne({ _id: FolderId })) {
    await ItemModel.updateOne(
      { _id: FolderId },
      {
        name,
        favourite,
        status,
      }
    );
    res.status(202).json({ message: "Updated" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

export { addItem, deleteItem, updateItem, getItem };

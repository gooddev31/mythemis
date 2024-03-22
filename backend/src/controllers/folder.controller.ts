import { Response, Request, NextFunction } from "express";
import FolderModel from "../models/folder.model";
import TeamModel from "../models/team.model";

const checkPermissions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const folder = res.locals.folder;
  const userId = req.user?._id;

  if (String(folder.creator.id) !== String(userId)) {
    return res.status(403).json({ error: "Access forbidden" });
  }
  next();
};

const createFolderHelper = async (req: Request) => {
  const { name } = req.body;
  const userId = req.user?._id;
  const username = req.user?.username;

  const folder = await FolderModel.create({
    name,
    creator: { id: userId, username },
  });
  return folder;
};

const getFolder = async (req: Request, res: Response) => {
  const page = req.params.page ? Number(req?.query?.page) : 1;
  const amount = req.query.amount ? Number(req?.query?.amount) : 5;
  if (!req.query.id && !req.query.page && !req.query.amount) {
    const Folders = await FolderModel.find({});
    if (Folders) {
      res.status(200).json({
        message: {
          Folders,
        },
      });
    } else {
      res.status(400).json({ message: "No Folders" });
    }
  } else if (!req.query.id) {
    const Folders = await FolderModel.find({})
      .limit(Number(amount))
      .skip(Number((page - 1) * amount + Number(page - 1 === 0 ? null : 1)));
    if (Folders) {
      res.status(200).json({
        message: {
          Folders,
        },
      });
    } else {
      res.status(400).json({ message: "No Folders" });
    }
  }
};

export const getUserFolders = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;
    const folders = await FolderModel.find({ "creator.id": userId });
    res.status(200).json(folders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user's folders" });
  }
};

const createFolder = async (req: Request, res: Response) => {
  try {
    const folder = await createFolderHelper(req);
    if (folder) {
      res.status(200).json(folder);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create folder" });
  }
};

const deleteFolder = async (req: Request, res: Response) => {
  const folder = res.locals.folder;

  const associatedTeams = await TeamModel.find({ "folders._id": folder._id });
  if (associatedTeams.length) {
    return res
      .status(400)
      .json({ message: "Folder is associated with one or more teams" });
  }

  await FolderModel.deleteOne({ _id: folder._id });
  return res.status(200).json({ message: "Folder deleted successfully" });
};

const updateFolder = async (req: Request, res: Response) => {
  const { name, favourite, status } = req.body;
  const folder = res.locals.folder;

  await FolderModel.updateOne(
    { _id: folder._id },
    {
      name,
      favourite,
      status,
    }
  );
  res.status(202).json({ message: "Folder updated successfully" });
};

// const searchItem = async (req: Request, res: Response) => {};

const getFoldersForTeam = async (req: Request, res: Response) => {
  const teamId = req.params.id;

  try {
    const team = res.locals.team;

    const folders = await FolderModel.find({ _id: { $in: team.folders } });
    if (folders.length) {
      res.status(200).json({ message: { folders } });
    } else {
      res.status(400).json({ message: "No Folders" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get folders for team" });
  }
};

const createFolderForTeam = async (req: Request, res: Response) => {
  try {
    const team = res.locals.team;
    const folder = await createFolderHelper(req);

    if (folder) {
      const folderId = folder.id;
      team.folders.push({ _id: folderId });
      await team.save();
      res.status(200).json(folder);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create folder" });
  }
};

const deleteFolderFromTeam = async (req: Request, res: Response) => {
  try {
    const folderId = req.params.folderId;
    const team = res.locals.team;

    const folder = await FolderModel.findOne({ _id: folderId });

    const folderIndex = team.folders.findIndex(
      (folder: any) => folder._id === folderId
    );
    if (!folder || folderIndex === -1) {
      return res.status(404).json({ error: "Folder not found" });
    }

    await FolderModel.deleteOne({ _id: folderId });
    team.folders.splice(folderIndex, 1);
    await team.save();

    res.status(200).json({ message: "Folder deleted from team successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete folder from team" });
  }
};

export {
  getFolder,
  createFolder,
  deleteFolder,
  updateFolder,
  getFoldersForTeam,
  createFolderForTeam,
  deleteFolderFromTeam,
  checkPermissions,
};

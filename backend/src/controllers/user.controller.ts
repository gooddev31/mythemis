import { Request, Response } from "express";
import User from "../models/user.model";
import Folder from "../models/folder.model";
import Team from "../models/team.model";
import { ObjectId } from "mongodb";
import File from "../models/file.model";

const getUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const user = await User.findById(userId, "name email");
   
    if (!user) {
        return res.status(400);
    }

    return res.status(200).json(user);
};

const getTeamsFoldersByUserId = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const teams = await Team.find({
        'users.userId': new ObjectId(userId)
    }).select('folders')

    const folderIds = teams.map(team => team.folders).flat();
    const folders = await Folder.find({
        '_id': { $in: folderIds }
    });

    return res.status(200).json(folders);
}

const getFoldersByUserId = async (req: Request, res: Response) => {
    const id = req.params.userId;
    const userId = req.user?._id;

    const file = await File.create({
        name: 'file test',
        folder: {
            _id: "65f316cd679ed4c4ccf7769f",
            name: "test new"
        }
    });
    console.log(file)

    const user = await User.findOne({ _id: new ObjectId(id) });

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        })
    }

    const folder = await Folder.find({ 
        creator: { id: userId },
    })

    return res.status(200).json({ 
        user,
        folder
    });
}

export { getUser, getFoldersByUserId, getTeamsFoldersByUserId };
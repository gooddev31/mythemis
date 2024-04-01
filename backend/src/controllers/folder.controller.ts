import {Response, Request, NextFunction} from "express";
import FolderModel from "../models/folder.model";

const getFolder = async (req: Request,res: Response) => {
    const page = req.params.page ? Number(req?.query?.page): 1
    const amount = req.query.amount ? Number(req?.query?.amount): 5
    if(!req.query.id && !req.query.page && !req.query.amount){
        const Folders = await FolderModel.find({})
        if(Folders) {
            res.status(200).json({message: {
                    Folders
            }})
        }else {
            res.status(400).json({message:
                    "No Folders"
            })
        }
    }else if(!req.query.id) {
        const Folders = await FolderModel.find({
        }).limit(Number(amount)).skip(Number((page-1) * amount + (Number(page-1 === 0? null: 1))))
        if(Folders) {
            res.status(200).json({message: {
                    Folders
            }})
        }else {
            res.status(400).json({message:
                    "No Folders"
            })
        }
    }
}

const createFolder = async (req: Request,res: Response) => {
    const {name, creator} = req.body
    const folder = await FolderModel.create({
        name,
        creator,
    })
    if(folder) {
        res.status(200).json({folder})
    }
}
const deleteFolder = async (req:Request, res: Response) => {
    const FolderId = req.params.id;
    if(await FolderModel.findOne({FolderId})) {
        await FolderModel.deleteOne({_id:FolderId})
        res.status(204).json({message: "Deleted"})
    }else {
        res.status(404).json({message: "Not found"})
    }

}
const updateFolder = async (req: Request, res: Response) => {
    const {name, favourite, status} = req.body
    const FolderId = req.params.id
    if(await FolderModel.findOne({_id:FolderId})) {
        await FolderModel.updateOne({_id:FolderId}, {
            name,
            favourite,
            status
        })
        res.status(202).json({message: "Updated"})
    }else {
        res.status(404).json({message: "Not found"})
    }
}

export {getFolder, createFolder, deleteFolder, updateFolder}
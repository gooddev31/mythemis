import ItemModel from "../models/item.model";
import {Request, Response} from "express";
import FolderModel from "../models/folder.model";

const getItem = async (req: Request,res: Response) => {
    const ItemId = req.query.id
    if(ItemId) {
        const Items = await ItemModel.findOne({ItemId})
        if(Items) {
            res.status(200).json({message: {
                    Items
                }})
        }else {
            res.status(400).json({message:
                    "No Items"
            })
        }
    }else if(ItemId === "0"){
        const Items = await ItemModel.findOne({})
        if(Items) {
            res.status(200).json({message: {
                    Items
                }})
        }else {
            res.status(400).json({message:
                    "No Items"
            })
        }
    }
}
const addItem = async(req: Request, res: Response) => {
    const {name, payload, creator, folder} = req.body

    const item = await ItemModel.create({
        name,
        payload,
        creator,
        folder
    })
    if(item && await FolderModel.findOne({_id: folder.id})) {
        res.status(200).json({message: item})
    }else {
        res.status(400).json({message: "Item can't create"})
    }
}
const deleteItem = async (req:Request, res: Response) => {
    const FolderId = req.params.id;
    if(await ItemModel.findOne({FolderId})) {
        await ItemModel.deleteOne({_id:FolderId})
        res.status(204).json({message: "Deleted"})
    }else {
        res.status(404).json({message: "Not found"})
    }

}
const updateItem = async (req: Request, res: Response) => {
    const {name, favourite, status} = req.body
    const FolderId = req.params.id
    if(await ItemModel.findOne({_id:FolderId})) {
        await ItemModel.updateOne({_id:FolderId}, {
            name,
            favourite,
            status
        })
        res.status(202).json({message: "Updated"})
    }else {
        res.status(404).json({message: "Not found"})
    }
}
export {addItem, deleteItem, updateItem, getItem}
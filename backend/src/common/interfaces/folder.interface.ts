import { ObjectId } from "mongoose";
import Item from "./item.interface";
import File from "./file.interface";


export default interface Folder extends Document {
    name: String;
    creator: { id: ObjectId; username: String };
    files: Array<File>,
    items?: Array<Item>;
    createDate: Date;
    lastEdit?: Date;
    status?: Boolean;
    favourite: Boolean;
}

export interface FolderBasicInfo {
    _id: ObjectId;
    name: String;
    items: Array<Item>;
}
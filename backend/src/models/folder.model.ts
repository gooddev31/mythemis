import * as mongoose from 'mongoose';
import Folder from "../common/interfaces/folder.interface"
import {ObjectId} from "mongodb";

const FolderSchema = new mongoose.Schema<Folder>({
    name: {
        required: true,
        type: String
    },
    creator: {
        id: {
            type: ObjectId,
            ref: 'User'
        },
        username: String
    },
    files: [
        {
            ref: "Folder",
            type: mongoose.Schema.Types.Mixed,
            required: false,
        }
    ],
    status: {
        type: Boolean,
        default: false
    },
    favourite: {
        type: Boolean,
        default: false
    },
    lastEdit: {
        type: Date,
        required: false
    },
    createDate: {
        type: Date,
        default: new Date()
    },
})

const folderModal = mongoose.model("Folder", FolderSchema);

export default folderModal;
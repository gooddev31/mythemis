import mongoose from "mongoose";
import {ObjectId} from "mongodb";
import IItem from "../intefaces/item.interface";


const ItemSchema = new mongoose.Schema<IItem>({
    name: {
        type: String,
        required: true
    },
    payload: {
      type: String,
      required: false
    },
    creator: {
        id: {
            type: ObjectId,
            ref: 'User'
        },
        username: String
    },
    lastEdit: {
        required: false,
        type: Date,
    },
    createDate: {
        type: Date,
        default: new Date()
    }
})
const itemModal = mongoose.model("ItemFolder", ItemSchema);

export default itemModal;
import { ObjectId } from "mongoose";


export default interface Item extends Document {
    name: String;
    payload?: String;
    createDate: Date;
    folder: {
        id: ObjectId;
    }
    creator: {
        id: ObjectId;
        username: String;
    };
    lastEdit?: Date;
}